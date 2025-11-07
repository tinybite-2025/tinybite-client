import DayGrid from "@/components/calendar/DayGrid";
import { useDateStore } from "@/store/useDateStore";
import { DayGridType } from "@/types/calendar";
import { StyleSheet, View } from "react-native";

interface WeekGridProps {
  week: DayGridType[];
  weekIndex: number;
}

const WeekGrid = ({ week, weekIndex }: WeekGridProps) => {
  const { todayYear, todayMonth, todayDay, currentDate } = useDateStore();

  return (
    <View key={weekIndex} style={styles.weekRow}>
      {week.map((day, dayIndex) => {
        const isBorderRight = (dayIndex + 1) % 7 !== 0;
        const isToday =
          day.isCurrentMonth &&
          day.day === todayDay &&
          currentDate.getMonth() === todayMonth &&
          currentDate.getFullYear() === todayYear;

        return (
          <DayGrid
            key={dayIndex}
            dayIndex={dayIndex}
            isBorderRight={isBorderRight}
            isToday={isToday}
            day={day}
          />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  weekRow: {
    flexDirection: "row",
    borderTopWidth: 1,
    borderTopColor: "#3F4360",
  },
});

export default WeekGrid;
