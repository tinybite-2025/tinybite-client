import AddButton from "@/app/components/AddButton";
import TaskBottomSheet from "@/app/components/TaskBottomSheet";
import TaskItem from "@/app/components/TaskItem";
import { useCallback, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface Task {
  id: string;
  title: string;
  completed: boolean;
}

export default function HomeScreen() {
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);

  // 바텀시트 열기
  const handleOpenBottomSheet = useCallback(() => {
    setIsBottomSheetOpen(true);
  }, []);

  // 바텀시트 닫기
  const handleCloseBottomSheet = useCallback(() => {
    setIsBottomSheetOpen(false);
  }, []);

  // 오늘의 할 일 상태 관리
  const [todayTasks, setTodayTasks] = useState<Task[]>([
    { id: "1", title: "물 2L 마시기", completed: false },
    { id: "2", title: "강아지 산책", completed: true },
    { id: "3", title: "세탁물 픽업", completed: false },
  ]);

  // 언젠가 할 일 상태 관리
  const [somedayTasks, setSomedayTasks] = useState<Task[]>([
    { id: "4", title: "책 읽기", completed: false },
    { id: "5", title: "운동하기", completed: false },
  ]);

  // 새로운 할 일 추가 (빈 제목으로 추가되어 자동으로 편집 모드 활성화)
  const addTodayTask = () => {
    const newId = `today-${Date.now()}`;
    setTodayTasks([...todayTasks, { id: newId, title: "", completed: false }]);
  };

  // 새로운 할 일 추가 (빈 제목으로 추가되어 자동으로 편집 모드 활성화)
  const addSomedayTask = () => {
    const newId = `someday-${Date.now()}`;
    setSomedayTasks([...somedayTasks, { id: newId, title: "", completed: false }]);
  };

  // 기존 할 일 제목 업데이트 (텍스트 입력 시 호출됨)
  const updateTodayTask = (id: string, newTitle: string) => {
    setTodayTasks(
      todayTasks.map((task) =>
        task.id === id ? { ...task, title: newTitle } : task
      )
    );
  };

  // 기존 할 일 제목 업데이트 (텍스트 입력 시 호출됨)
  const updateSomedayTask = (id: string, newTitle: string) => {
    setSomedayTasks(
      somedayTasks.map((task) =>
        task.id === id ? { ...task, title: newTitle } : task
      )
    );
  };

  // 할 일 완료/미완료 상태 토글
  const toggleTodayTask = (id: string) => {
    setTodayTasks(
      todayTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // 할 일 완료/미완료 상태 토글
  const toggleSomedayTask = (id: string) => {
    setSomedayTasks(
      somedayTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>홈</Text>
      <TouchableOpacity 
        style={styles.openButton} 
        onPress={handleOpenBottomSheet}
      >
        <Text style={styles.openButtonText}>바텀시트 열기</Text>
      </TouchableOpacity>

      <View style={styles.contentContainer}>
        <Text style={styles.taskTitle}>오늘의 할 일</Text>
        <View style={styles.taskList}>
          {todayTasks.map((task) => (
            <TaskItem
              key={task.id}
              id={task.id}
              title={task.title}
              completed={task.completed}
              isRepeatable={true}
              onToggle={toggleTodayTask}
              onTitleChange={(title) => updateTodayTask(task.id, title)}
            />
          ))}
          <AddButton onPress={addTodayTask} />
        </View>

        <Text style={[styles.taskTitle, styles.taskTitleSecond]}>언젠가 할 일</Text>
        <View style={styles.taskList}>
          {somedayTasks.map((task) => (
            <TaskItem
              key={task.id}
              id={task.id}
              title={task.title}
              completed={task.completed}
              isRepeatable={false}
              onToggle={toggleSomedayTask}
              onTitleChange={(title) => updateSomedayTask(task.id, title)}
            />
          ))}
          <AddButton onPress={addSomedayTask} />
        </View>
      </View>

      {isBottomSheetOpen && (
        <TaskBottomSheet onClose={handleCloseBottomSheet} />
      )}
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
  taskTitle: {
    fontSize: 18,
    lineHeight: 23.4, 
    fontFamily: "Pretendard",
    fontWeight: "500",
    color: "#FFFFFF",
    textAlign: "left",
    marginBottom: 8,
    width: 350,
  },
  taskTitleSecond: {
    marginTop: 12,
  },
  taskList: {
    gap: 2,
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    color: "#FFFFFF",
    marginBottom: 20,
  },
  openButton: {
    backgroundColor: "#3F4360",
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8
  },
  openButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },
});
