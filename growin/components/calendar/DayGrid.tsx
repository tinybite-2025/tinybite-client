import { events } from "@/mock/calendarEvent";
import { DayGridType } from "@/types/calendar";
import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet, Text, View } from "react-native";
import EventTag from "./EventTag";

interface DayGridProps {
  dayIndex: number;
  isBorderRight: boolean;
  isToday: boolean;
  day: DayGridType;
}

const DayGrid = ({ dayIndex, isBorderRight, isToday, day }: DayGridProps) => {
  return (
    <View
      key={dayIndex}
      style={[styles.dayCell, isBorderRight && styles.borderRight]}
    >
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
              <Ionicons name="add" size={6} color="white" />
            )}
        </View>
      </View>

      {/* 할 일 목록 */}
      {day.isCurrentMonth &&
        events[day.day] &&
        events[day.day]
          .slice(0, 3)
          .map((eventItem, eventIndex) => (
            <EventTag
              key={eventIndex}
              eventItem={eventItem}
              eventIndex={eventIndex}
            />
          ))}
    </View>
  );
};

const styles = StyleSheet.create({
  dayCell: {
    flex: 1,
    height: 56,
    paddingVertical: 2,
    alignItems: "center",
    gap: 2,
    flexShrink: 0,
  },
  borderRight: {
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
    flexShrink: 0,
    right: 0,
  },
});

export default DayGrid;
