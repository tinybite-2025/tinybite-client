import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Calendar } from "react-native-calendars";

type Event = {
  title: string;
  color: string;
};

const events: Record<string, Event[]> = {
  "2025-11-01": [{ title: "자인 스크럼", color: "#1976D2" }],
  "2025-11-02": [{ title: "도서관 접아", color: "#43A047" }],
  "2025-11-06": [{ title: "카페 알바", color: "#E53935" }],
  "2025-11-08": [{ title: "디자인 스크럼", color: "#1976D2" }],
  "2025-11-11": [{ title: "인트 회의", color: "#9C27B0" }],
  "2025-11-15": [
    { title: "카페 알바 대타", color: "#E53935" },
    { title: "전공 시험", color: "#43A047" },
  ],
  "2025-11-18": [{ title: "인자 회의", color: "#1976D2" }],
  "2025-11-21": [
    { title: "디자인 스크럼", color: "#1976D2" },
    { title: "해커톤", color: "#E53935" },
  ],
  "2025-11-25": [
    { title: "인트 대화", color: "#E53935" },
    { title: "도서관 대출", color: "#FB8C00" },
  ],
  "2025-11-26": [{ title: "디자인 스크럼", color: "#1976D2" }],
};

export default function CalendarCustom() {
  return (
    <View style={styles.container}>
      <Calendar
        current={"2025-11-01"}
        monthFormat={"MMMM yyyy"}
        hideExtraDays
        firstDay={0}
        theme={{
          backgroundColor: "#1C1C28",
          calendarBackground: "#1C1C28",
          dayTextColor: "#EDEDF7",
          monthTextColor: "#EDEDF7",
          textSectionTitleColor: "#A0A0B0",
          arrowColor: "#EDEDF7",
          todayTextColor: "#4CAF50",
        }}
        markedDates={{
          [dateString]: { todayStyle: { backgroundColor: "#FFB3B3" } },
          [selectedDate]: {
            selectedStyle: {
              borderWidth: 1,
              borderRadius: 4,
              borderColor: "#AAAAAA",
            },
          },
        }}
        // 각 날짜 커스텀
        dayComponent={({ date, state, marking }) => {
          return (
            <View
              style={[
                date.dateString === selectedDate
                  ? marking?.selectedStyle
                  : { undefinded },
                {
                  backgroundColor: "white",
                  width: wp("12%"),
                  height: hp("7.5%"),
                  justifyContent: "center",
                  alignItems: "center",
                },
              ]}
            >
              <TouchableOpacity
                disabled={state === "disabled" ? true : undefined}
                style={
                  state === "disabled" ? styles.disableDate : styles.enableDate
                }
                onPress={() => handleDayPress(date)}
              >
                <View
                  style={[
                    marking?.todayStyle,
                    {
                      width: 20,
                      height: 14,
                      alignItems: "center",
                      justifyContent: "center",
                    },
                  ]}
                >
                  <Text style={{ fontSize: 10 }}>{date.day}</Text>
                </View>
                <Text>{"☺️"}</Text>
              </TouchableOpacity>
            </View>
          );
        }}
        // end
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1C1C28",
    paddingTop: 40,
  },
  dayContainer: {
    flex: 1,
    margin: 2,
    borderRadius: 6,
    padding: 2,
  },
  dayText: {
    fontSize: 12,
    textAlign: "center",
    marginBottom: 2,
  },
  eventBox: {
    borderRadius: 4,
    paddingVertical: 1,
    paddingHorizontal: 2,
    marginVertical: 1,
  },
  eventText: {
    fontSize: 9,
    color: "#fff",
    textAlign: "center",
  },
});
