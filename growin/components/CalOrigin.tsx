import React, { Fragment, useRef, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Calendar, CalendarUtils } from "react-native-calendars";
import testIDs from "./testIDs";

const INITIAL_DATE = "2024-11-06";

const CalendarScreen = () => {
  const [currentMonth, setCurrentMonth] = useState(INITIAL_DATE);

  const getDate = (count: number) => {
    const date = new Date(INITIAL_DATE);
    const newDate = date.setDate(date.getDate() + count);
    return CalendarUtils.getCalendarDateString(newDate);
  };

  const renderCalendarWithMultiPeriodMarking = () => {
    return (
      <Fragment>
        <Text style={styles.text}>Multi-period marking</Text>
        <Calendar
          style={styles.calendar}
          current={INITIAL_DATE}
          markingType={"multi-period"}
          markedDates={{
            [INITIAL_DATE]: {
              periods: [
                { startingDay: true, endingDay: false, color: "green" },
                { startingDay: true, endingDay: false, color: "orange" },
              ],
            },
            [getDate(1)]: {
              periods: [
                { startingDay: false, endingDay: true, color: "green" },
                { startingDay: false, endingDay: true, color: "orange" },
                { startingDay: true, endingDay: false, color: "pink" },
              ],
            },
            [getDate(3)]: {
              periods: [
                { startingDay: true, endingDay: true, color: "orange" },
                { color: "transparent" },
                { startingDay: false, endingDay: false, color: "pink" },
              ],
            },
          }}
        />
      </Fragment>
    );
  };

  const renderCalendarWithCustomMarkingType = () => {
    return (
      <Fragment>
        <Text style={styles.text}>Custom marking type</Text>
        <Calendar
          style={styles.calendar}
          hideExtraDays
          current={INITIAL_DATE}
          minDate={INITIAL_DATE}
          markingType={"custom"}
          markedDates={{
            [INITIAL_DATE]: {
              customStyles: {
                container: {
                  backgroundColor: "white",
                  elevation: 2,
                },
                text: {
                  color: "red",
                  marginTop: 0,
                },
              },
            },
            [getDate(8)]: {
              selected: true,
            },
            [getDate(9)]: {
              customStyles: {
                container: {
                  backgroundColor: "red",
                  elevation: 4,
                },
                text: {
                  color: "white",
                },
              },
            },
            [getDate(14)]: {
              customStyles: {
                container: {
                  backgroundColor: "green",
                },
                text: {
                  color: "white",
                },
              },
            },
            [getDate(15)]: {
              customStyles: {
                container: {
                  backgroundColor: "black",
                  elevation: 2,
                },
                text: {
                  color: "yellow",
                },
              },
            },
            [getDate(21)]: {
              disabled: true,
            },
            [getDate(28)]: {
              customStyles: {
                text: {
                  color: "black",
                  fontWeight: "bold",
                },
              },
            },
            [getDate(30)]: {
              customStyles: {
                container: {
                  backgroundColor: "pink",
                  elevation: 4,
                  borderColor: "purple",
                  borderWidth: 5,
                },
                text: {
                  marginTop: 3,
                  fontSize: 11,
                  color: "black",
                },
              },
            },
            [getDate(31)]: {
              customStyles: {
                container: {
                  backgroundColor: "orange",
                  borderRadius: 0,
                },
              },
            },
          }}
        />
      </Fragment>
    );
  };

  const renderCalendarWithCustomDay = () => {
    return (
      <Fragment>
        <Text style={styles.text}>Custom day component</Text>
        <Calendar
          style={[styles.calendar, styles.customCalendar]}
          dayComponent={({ date, state }) => {
            return (
              <View>
                <Text
                  style={[
                    styles.customDay,
                    state === "disabled"
                      ? styles.disabledText
                      : styles.defaultText,
                  ]}
                >
                  {date?.day}
                </Text>
              </View>
            );
          }}
        />
      </Fragment>
    );
  };

  const customHeaderProps = useRef<any>(null);

  const setCustomHeaderNewMonth = (next = false) => {
    const add = next ? 1 : -1;
    const month = new Date(customHeaderProps?.current?.month);
    const newMonth = new Date(month.setMonth(month.getMonth() + add));
    customHeaderProps?.current?.addMonth(add);
    setCurrentMonth(newMonth.toISOString().split("T")[0]);
  };
  const moveNext = () => {
    setCustomHeaderNewMonth(true);
  };
  const movePrevious = () => {
    setCustomHeaderNewMonth(false);
  };

  const renderCalendarWithCustomHeader = () => {
    const CustomHeader = React.forwardRef((props, ref) => {
      customHeaderProps.current = props;

      return (
        // @ts-expect-error
        <View ref={ref} {...props} style={styles.customHeader}>
          <TouchableOpacity onPress={movePrevious}>
            <Text>Previous</Text>
          </TouchableOpacity>
          <Text>Custom header!</Text>
          <Text>{currentMonth}</Text>
          <TouchableOpacity onPress={moveNext}>
            <Text>Next</Text>
          </TouchableOpacity>
        </View>
      );
    });

    CustomHeader.displayName = "CustomHeader";

    return (
      <Fragment>
        <Text style={styles.text}>Custom header component</Text>
        <Calendar
          initialDate={INITIAL_DATE}
          testID={testIDs.calendars.LAST}
          style={[styles.calendar, styles.customCalendar]}
          customHeader={CustomHeader}
        />
      </Fragment>
    );
  };

  const renderExamples = () => {
    return (
      <Fragment>
        {renderCalendarWithCustomDay()}
        {renderCalendarWithCustomHeader()}
        {renderCalendarWithMultiPeriodMarking()}
        {renderCalendarWithCustomMarkingType()}
      </Fragment>
    );
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      testID={testIDs.calendars.CONTAINER}
    >
      {renderExamples()}
    </ScrollView>
  );
};

export default CalendarScreen;

const styles = StyleSheet.create({
  calendar: {
    marginBottom: 10,
  },
  switchContainer: {
    flexDirection: "row",
    margin: 10,
    alignItems: "center",
  },
  switchText: {
    margin: 10,
    fontSize: 16,
  },
  text: {
    textAlign: "center",
    padding: 10,
    backgroundColor: "lightgrey",
    fontSize: 16,
  },
  disabledText: {
    color: "grey",
  },
  defaultText: {
    color: "purple",
  },
  customCalendar: {
    height: 250,
    borderBottomWidth: 1,
    borderBottomColor: "lightgrey",
  },
  customDay: {
    textAlign: "center",
  },
  customHeader: {
    backgroundColor: "#FCC",
    flexDirection: "row",
    justifyContent: "space-around",
    marginHorizontal: -4,
    padding: 8,
  },
  customTitleContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  customTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#00BBF2",
  },
});
