import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const CalendarUI = () => {
  const [currentDate, setCurrentDate] = useState(new Date(2025, 10, 1));

  // 샘플 이벤트 데이터
  type EventItem = { title: string; color: string };
  const events: Record<number, EventItem[]> = {
    2: [
      { title: "디자인 스크럼", color: "#3B82F6" },
      { title: "도서관 점약", color: "#22C55E" },
    ],
    4: [{ title: "전공 시험", color: "#22C55E" }],
    5: [{ title: "잇타 회의", color: "#A855F7" }],
    7: [{ title: "카페 알바", color: "#EF4444" }],
    9: [{ title: "디자인 스크럼", color: "#3B82F6" }],
    12: [{ title: "잇타 회의", color: "#A855F7" }],
    14: [{ title: "카페 알바", color: "#EF4444" }],
    16: [
      { title: "카페 알바 대...", color: "#EF4444" },
      { title: "전공 시험", color: "#22C55E" },
      { title: "디자인 스크럼", color: "#3B82F6" },
    ],
    19: [{ title: "잇타 회의", color: "#A855F7" }],
    20: [{ title: "디자인 스크럼", color: "#3B82F6" }],
    21: [{ title: "카페 알바", color: "#EF4444" }],
    22: [{ title: "전공 시험", color: "#22C55E" }],
    23: [
      { title: "디자인 스크럼", color: "#3B82F6" },
      { title: "전공 시험", color: "#22C55E" },
      { title: "해커톤", color: "#EF4444" },
    ],
    26: [
      { title: "잇타 회의", color: "#A855F7" },
      { title: "도서관 대출", color: "#F97316" },
      { title: "디자인 스크럼", color: "#3B82F6" },
    ],
    28: [{ title: "카페 알바", color: "#EF4444" }],
    29: [{ title: "전공 시험", color: "#22C55E" }],
    30: [{ title: "디자인 스크럼", color: "#3B82F6" }],
  };

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    return new Date(year, month, 1).getDay();
  };

  const renderCalendar = () => {
    const daysInMonth = getDaysInMonth(currentDate);
    const firstDay = getFirstDayOfMonth(currentDate);
    const days = [];
    const prevMonthDays = firstDay === 0 ? 6 : firstDay - 1;

    // 이전 달 날짜
    const prevMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      0
    );
    const prevMonthDaysCount = prevMonth.getDate();
    for (let i = prevMonthDays; i > 0; i--) {
      days.push({
        day: prevMonthDaysCount - i + 1,
        isCurrentMonth: false,
      });
    }

    // 현재 달 날짜
    for (let i = 1; i <= daysInMonth; i++) {
      days.push({
        day: i,
        isCurrentMonth: true,
      });
    }

    // 다음 달 날짜
    const remainingDays = 42 - days.length;
    for (let i = 1; i <= remainingDays; i++) {
      days.push({
        day: i,
        isCurrentMonth: false,
      });
    }

    const weeks = [];
    for (let i = 0; i < days.length; i += 7) {
      weeks.push(days.slice(i, i + 7));
    }

    return weeks;
  };

  const weekDays = ["월", "화", "수", "목", "금", "토", "일"];

  return (
    <View style={styles.container}>
      {/* 헤더 */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <View style={styles.logo}>
            <Text style={styles.logoText}>G</Text>
          </View>
          <TouchableOpacity style={styles.dateSelector}>
            <Text style={styles.dateText}>2025년 9월</Text>
            <Text style={styles.arrow}>▼</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.profileIcon}>
          <Text style={styles.profileText}>👤</Text>
        </View>
      </View>

      {/* 요일 헤더 */}
      <View style={styles.weekDaysContainer}>
        {weekDays.map((day, index) => (
          <View key={index} style={styles.weekDay}>
            <Text style={styles.weekDayText}>{day}</Text>
          </View>
        ))}
      </View>

      {/* 달력 그리드 */}
      <ScrollView style={styles.calendarScroll}>
        {renderCalendar().map((week, weekIndex) => (
          <View key={weekIndex} style={styles.weekRow}>
            {week.map((day, dayIndex) => (
              <View key={dayIndex} style={styles.dayCell}>
                <Text
                  style={[
                    styles.dayNumber,
                    !day.isCurrentMonth && styles.inactiveDay,
                    day.day === 26 && day.isCurrentMonth && styles.todayNumber,
                  ]}
                >
                  {day.day}
                </Text>
                {day.isCurrentMonth && events[day.day] && (
                  <View style={styles.eventsContainer}>
                    {events[day.day].map((event, eventIndex) => (
                      <View
                        key={eventIndex}
                        style={[
                          styles.eventTag,
                          { backgroundColor: event.color },
                        ]}
                      >
                        <Text style={styles.eventText} numberOfLines={1}>
                          {event.title}
                        </Text>
                      </View>
                    ))}
                  </View>
                )}
                {day.day === 26 && day.isCurrentMonth && (
                  <View style={styles.todayIndicator}>
                    <Text style={styles.todayText}>26</Text>
                  </View>
                )}
              </View>
            ))}
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    paddingTop: 50,
  },
  headerLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  logo: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#EC4899",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  logoText: {
    color: "#FFFFFF",
    fontSize: 24,
    fontWeight: "bold",
  },
  dateSelector: {
    flexDirection: "row",
    alignItems: "center",
  },
  dateText: {
    color: "#FFFFFF",
    fontSize: 24,
    fontWeight: "600",
    marginRight: 8,
  },
  arrow: {
    color: "#FFFFFF",
    fontSize: 14,
  },
  profileIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
  },
  profileText: {
    fontSize: 20,
  },
  weekDaysContainer: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#334155",
    paddingVertical: 12,
  },
  weekDay: {
    flex: 1,
    alignItems: "center",
  },
  weekDayText: {
    color: "#94A3B8",
    fontSize: 14,
    fontWeight: "500",
  },
  calendarScroll: {
    flex: 1,
  },
  weekRow: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#1E293B",
  },
  dayCell: {
    flex: 1,
    minHeight: 100,
    padding: 4,
    borderRightWidth: 1,
    borderRightColor: "#1E293B",
    position: "relative",
  },
  dayNumber: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
    marginBottom: 4,
  },
  inactiveDay: {
    color: "#475569",
  },
  todayNumber: {
    opacity: 0,
  },
  todayIndicator: {
    position: "absolute",
    top: 4,
    left: 0,
    right: 0,
    alignItems: "center",
  },
  todayText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "700",
    backgroundColor: "#EC4899",
    width: 32,
    height: 32,
    textAlign: "center",
    lineHeight: 32,
    borderRadius: 16,
  },
  eventsContainer: {
    gap: 2,
  },
  eventTag: {
    paddingHorizontal: 6,
    paddingVertical: 3,
    borderRadius: 4,
    marginBottom: 2,
  },
  eventText: {
    color: "#FFFFFF",
    fontSize: 10,
    fontWeight: "500",
  },
});

export default CalendarUI;
