import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface TaskItemProps {
  id: string;
  title: string;
  completed: boolean;
  useDashed?: boolean;
  onToggle: (id: string) => void;
}

export default function TaskItem({
  id,
  title,
  completed,
  useDashed = false,
  onToggle,
}: TaskItemProps) {
  return (
    <TouchableOpacity
      style={styles.taskItem}
      onPress={() => onToggle(id)}
      activeOpacity={0.7}
    >
      <Text
        style={[
          styles.taskText,
          completed && styles.taskTextCompleted,
        ]}
      >
        {title}
      </Text>
      <View style={styles.toggleContainer}>
        {completed ? (
          <View style={styles.toggleChecked}>
            <View style={styles.toggleCheckedInner} />
          </View>
        ) : useDashed ? (
          <View style={styles.toggleUncheckedDashed} />
        ) : (
          <View style={styles.toggleUnchecked} />
        )}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  taskItem: {
    width: 350,
    height: 40,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#2A2C45",
    borderRadius: 15,
    paddingTop: 8,
    paddingRight: 15,
    paddingBottom: 8,
    paddingLeft: 15,
  },
  taskText: {
    fontSize: 13,
    lineHeight: 16.9,
    fontFamily: "Pretendard",
    fontWeight: "500",
    color: "#FFFFFF",
  },
  taskTextCompleted: {
    color: "#8E8E93",
  },
  toggleContainer: {
    width: 24,
    height: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  toggleUnchecked: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "#3F4360",
    borderStyle: "solid",
  },
  toggleUncheckedDashed: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "#3F4360",
    borderStyle: "dashed",
  },
  toggleChecked: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: "#FF008B",
    borderWidth: 2,
    borderColor: "#FF008B",
    justifyContent: "center",
    alignItems: "center",
  },
  toggleCheckedInner: {
    width: 20,
    height: 20,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "#3F4360",
    borderStyle: "solid",
  },
});

