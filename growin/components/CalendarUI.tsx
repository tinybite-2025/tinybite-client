import React, { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const CalendarUI = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const today = new Date();
  const todayDay = today.getDate();
  const todayMonth = today.getMonth();
  const todayYear = today.getFullYear();

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
          <Image
            source={require("@/assets/images/logo/growin-logo-home-small.png")}
            style={styles.logo}
          />
          <View style={styles.headerMenu}>
            <TouchableOpacity>
              <Text style={styles.dateText}>
                {currentDate.getFullYear()}년 {currentDate.getMonth() + 1}월
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                source={require("@/assets/images/icon/arrow/arrow-down.png")}
                style={styles.arrow}
              />
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity>
          <Image
            source={require("@/assets/images/icon/user.png")}
            style={styles.profileImage}
          />
        </TouchableOpacity>
      </View>

      {/* 달력 */}
      {/* 요일 */}
      <View style={styles.weekDaysContainer}>
        {weekDays.map((day, index) => (
          <View key={index} style={styles.weekDay}>
            <Text style={styles.weekDayText}>{day}</Text>
          </View>
        ))}
      </View>

      {/* 그리드 */}
      <View style={styles.calendarScroll}>
        {renderCalendar().map((week, weekIndex) => (
          <View key={weekIndex} style={styles.weekRow}>
            {week.map((day, dayIndex) => {
              const isToday =
                day.isCurrentMonth &&
                day.day === todayDay &&
                currentDate.getMonth() === todayMonth &&
                currentDate.getFullYear() === todayYear;

              return (
                <View key={dayIndex} style={styles.dayCell}>
                  {/* 일자 */}
                  <View style={styles.dayHeader}>
                    {/* 오늘 표시 */}
                    {isToday && <View style={styles.todayIndicator} />}

                    <View style={styles.dayNumberContainer}>
                      {/* 숫자 */}
                      <Text
                        style={[
                          styles.dayNumber,
                          !day.isCurrentMonth && styles.inactiveDay,
                        ]}
                      >
                        {day.day}
                      </Text>

                      {/* 할 일 4개 이상 */}
                      {day.isCurrentMonth &&
                        events[day.day] &&
                        events[day.day].length > 3 && (
                          <Image
                            source={require("@/assets/images/icon/plus-calendar-day.png")}
                            style={styles.plusIcon}
                          />
                        )}
                    </View>
                  </View>

                  {/* 할 일 목록 */}
                  {day.isCurrentMonth &&
                    events[day.day] &&
                    events[day.day].slice(0, 3).map((eventItem, eventIndex) => (
                      <View
                        key={eventIndex}
                        style={[
                          styles.eventTag,
                          { backgroundColor: eventItem.color },
                        ]}
                      >
                        <Text style={styles.eventText} numberOfLines={1}>
                          {eventItem.title}
                        </Text>
                      </View>
                    ))}
                </View>
              );
            })}
          </View>
        ))}
      </View>
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
    alignItems: "flex-end",
    paddingTop: 10,
  },
  headerLeft: {
    flexDirection: "row",
    alignItems: "flex-end",
    gap: 10,
  },
  logo: { width: 31.812, height: 23.471 },
  headerMenu: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
  },
  dateText: {
    color: "#FFFFFF",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "600",
    lineHeight: 26,
  },
  arrow: {
    width: 24,
    height: 24,
    flexShrink: 0,
  },
  profileImage: {
    width: 23,
    height: 26,
    flexShrink: 0,
  },
  weekDaysContainer: {
    flexDirection: "row",
    paddingVertical: 2,
    alignItems: "center",
    gap: 1,
    borderBottomWidth: 1,
    borderBottomColor: "#3F4360",
  },
  weekDay: {
    flex: 1,
    flexShrink: 0,
    alignItems: "center",
  },
  weekDayText: {
    color: "#FFFFFF",
    textAlign: "center",
    fontSize: 13,
    fontWeight: "500",
    lineHeight: 16.9,
  },
  calendarScroll: {
    flex: 1,
  },
  weekRow: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#3F4360",
  },
  dayCell: {
    flex: 1,
    height: 56,
    paddingVertical: 2,
    alignItems: "center",
    gap: 2,
    flexShrink: 0,
    borderRightWidth: 1,
    borderRightColor: "#3F4360",
  },
  dayHeader: {
    width: "100%",
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
  },
  todayIndicator: {
    position: "absolute",
    width: 20,
    height: 13,
    flexShrink: 0,
    backgroundColor: "#FF008B",
    borderRadius: 15,
    alignSelf: "center",
  },
  dayNumberContainer: {
    width: 40,
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
  },
  dayNumber: {
    position: "relative",
    alignItems: "center",
    color: "#FFFFFF",
    textAlign: "center",
    fontSize: 10,
    fontWeight: "500",
    lineHeight: 13,
  },
  inactiveDay: {
    color: "#8E8E93",
  },
  plusIcon: {
    position: "absolute",
    width: 16,
    height: 8,
    flexShrink: 0,
    right: 0,
  },
  eventTag: {
    flexDirection: "row",
    minWidth: "100%",
    // paddingVertical: 1,
    paddingHorizontal: 2,
    alignItems: "center",
    flexShrink: 0,
    borderRadius: 3,
    height: 11,
  },
  eventText: {
    flexShrink: 0,
    overflow: "hidden",
    color: "#FFFFFF",
    fontSize: 8,
    lineHeight: 10.4,
  },
});

export default CalendarUI;
