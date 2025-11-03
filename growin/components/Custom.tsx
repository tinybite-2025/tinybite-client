import React, { Fragment } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Calendar, CalendarUtils, LocaleConfig } from "react-native-calendars";

const INITIAL_DATE = "2024-11-06";
LocaleConfig.locales["kr"] = {
  monthNames: [
    "1월",
    "2월",
    "3월",
    "4월",
    "5월",
    "6월",
    "7월",
    "8월",
    "9월",
    "10월",
    "11월",
    "12월",
  ],
  monthNamesShort: [
    "1월",
    "2월",
    "3월",
    "4월",
    "5월",
    "6월",
    "7월",
    "8월",
    "9월",
    "10월",
    "11월",
    "12월",
  ],
  dayNames: ["일", "월", "화", "수", "목", "금", "토"],
  dayNamesShort: ["일", "월", "화", "수", "목", "금", "토"],
  today: "오늘",
};

LocaleConfig.defaultLocale = "kr";

const Custom = () => {
  const getDate = (count: number) => {
    const date = new Date(INITIAL_DATE);
    const newDate = date.setDate(date.getDate() + count);
    return CalendarUtils.getCalendarDateString(newDate);
  };

  const renderCalendarWithMultiPeriodMarking = () => {
    return (
      <Fragment>
        <Calendar
          style={{
            backgroundColor: "transparent",
            width: "auto",
            padding: 0,
            margin: 0,
          }}
          theme={{
            backgroundColor: "transparent",
            calendarBackground: "transparent",
            textSectionTitleColor: "#b6c1cd",
            dayTextColor: "#000",
          }}
          hideArrows={true}
          renderHeader={(date) => {
            const year = date.getFullYear();
            const month = date.getMonth() + 1;
            return (
              <View style={{ padding: 10, alignItems: "center" }}>
                <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                  {year}년 {month}월
                </Text>
              </View>
            );
          }}
          firstDay={1}
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
          dayComponent={({ date, state, marking }) => {
            return (
              <View
                style={{
                  padding: 0,
                  margin: 0,
                  backgroundColor: "transparent",
                  minHeight: 100,
                  justifyContent: "flex-start",
                  alignItems: "center",
                  borderWidth: 1,
                  borderColor: "#e0e0e0",
                }}
              >
                <TouchableOpacity
                  disabled={state === "disabled" ? true : undefined}
                  style={{
                    backgroundColor: "blue",
                  }}
                >
                  <View
                    style={{
                      backgroundColor: "transparent",
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 12,
                        color: state === "disabled" ? "#d9e1e8" : "#000",
                      }}
                    >
                      {date?.day}
                    </Text>
                  </View>
                  <Text>{"☺️dsfdfsfsdf"}</Text>
                </TouchableOpacity>
              </View>
            );
          }}
        />
      </Fragment>
    );
  };

  return renderCalendarWithMultiPeriodMarking();
};

export default Custom;
