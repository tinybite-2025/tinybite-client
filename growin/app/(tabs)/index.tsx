import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import TaskItem from "../components/TaskItem";

interface Task {
  id: string;
  title: string;
  completed: boolean;
}

export default function HomeScreen() {
  const [tasks, setTasks] = useState<Task[]>([
    { id: "1", title: "물 2L 마시기", completed: false },
    { id: "2", title: "강아지 산책", completed: true },
    { id: "3", title: "세탁물 픽업", completed: false },
  ]);

  const toggleTask = (id: string) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>오늘의 할 일</Text>
        <View style={styles.taskList}>
          {tasks.map((task) => (
            <TaskItem
              key={task.id}
              id={task.id}
              title={task.title}
              completed={task.completed}
              useDashed={task.id === "1"}
              onToggle={toggleTask}
            />
          ))}
          <TouchableOpacity style={styles.addTaskButton} activeOpacity={0.7}>
            <View style={styles.addTaskCircle}>
              <Ionicons name="add" size={20} color="#FFFFFF" />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#10121F",
    paddingTop: 60,
  },
  contentContainer: {
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    lineHeight: 23.4, 
    fontFamily: "Pretendard",
    fontWeight: "500",
    color: "#FFFFFF",
    textAlign: "left",
    marginBottom: 8,
    width: 350,
  },
  taskList: {
    gap: 4,
    alignItems: "center",
  },
  addTaskButton: {
    width: 350,
    height: 40,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#2A2C45",
    borderRadius: 15,
  },
  addTaskCircle: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: "#3F4360",
    alignItems: "center",
    justifyContent: "center",
  },
});
