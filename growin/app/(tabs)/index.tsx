import AddButton from "@/components/AddButton";
import CalendarHeader from "@/components/calendar/CalendarHeader";
import MonthlyCalendar from "@/components/calendar/MonthlyCalendar";
import FloatingButton from "@/components/FloatingButton";
import ConfirmModal from "@/components/modal/ConfirmModal";
import TaskBottomSheet from "@/components/task/bottomSheet/TaskBottomSheet";
import ScheduleCard from "@/components/task/schedule/ScheduleCard";
import TodaySomedayTaskItem from "@/components/task/todaySomeday/TodaySomedayTaskItem";
import { useCallback, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

interface Task {
  id: string;
  title: string;
  completed: boolean;
}

export default function HomeScreen() {
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const todos = [
    { id: 0, text: "동역사 스타벅스 가기", done: false },
    { id: 1, text: "노트북 환경 설정", done: true },
  ];

  // 모달 확인 버튼 클릭
  const handleConfirm = () => {
    console.log("예 클릭");
    setModalVisible(false);
  };

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
    setSomedayTasks([
      ...somedayTasks,
      { id: newId, title: "", completed: false },
    ]);
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
      <CalendarHeader />
      <ScrollView contentContainerStyle={{ paddingBottom: 12, gap: 12 }}>
        <MonthlyCalendar />

        <TouchableOpacity
          style={styles.openButton}
          onPress={() => setModalVisible(true)}
        >
          <Text style={styles.openButtonText}>탈퇴 모달 열기</Text>
        </TouchableOpacity>

        <View style={styles.scheduleCardWrapper}>
        <ScheduleCard
          id={0}
          title="FE 회의"
          time="16:00 - 18:00"
          todos={todos}
        />

        <AddButton
          onPress={handleOpenBottomSheet}
          style={styles.openButton}
        />
        </View>
        

        <View style={styles.contentContainer}>
          <Text style={styles.taskTitle}>오늘의 할 일</Text>
          <View style={styles.taskList}>
            {todayTasks.map((task) => (
              <TodaySomedayTaskItem
                key={task.id}
                id={task.id}
                title={task.title}
                completed={task.completed}
                isRepeatable={true}
                onToggle={toggleTodayTask}
                onTitleChange={(title: string) =>
                  updateTodayTask(task.id, title)
                }
              />
            ))}
            <AddButton onPress={addTodayTask} />
          </View>

          <Text style={[styles.taskTitle, styles.taskTitleSecond]}>
            언젠가 할 일
          </Text>
          <View style={styles.taskList}>
            {somedayTasks.map((task) => (
              <TodaySomedayTaskItem
                key={task.id}
                id={task.id}
                title={task.title}
                completed={task.completed}
                isRepeatable={false}
                onToggle={toggleSomedayTask}
                onTitleChange={(title: string) =>
                  updateSomedayTask(task.id, title)
                }
              />
            ))}
            <AddButton onPress={addSomedayTask} />
          </View>
        </View>
      </ScrollView>
      {isBottomSheetOpen && (
        <TaskBottomSheet onClose={handleCloseBottomSheet} />
      )}

        {isBottomSheetOpen && (
          <TaskBottomSheet onClose={handleCloseBottomSheet} />
        )}

        <ConfirmModal
          visible={modalVisible}
          onClose={() => setModalVisible(false)}
          onConfirm={handleConfirm}
          title="회원 탈퇴"
          text_15_500="회원 탈퇴 시 작성한 모든 게시글과 서비스 이용기록이 삭제됩니다."
          text_18_600="정말로 탈퇴하시겠습니까?"
        />
      <FloatingButton onPress={() => {}} 
        iconSource={require("@/assets/images/task/task-edit.png")} />
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#10121F",
    paddingTop: 60,
    paddingHorizontal: 20,
    gap: 8,
  },
  contentContainer: {
    alignItems: "center",
  },
  scheduleCardWrapper: {
    gap: 8,
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
    width: "100%",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    color: "#FFFFFF",
    marginBottom: 20,
  },
  openButton: {
    width: "100%",
    alignSelf: "center",
    
  },
  openButtonText: {
    fontSize: 16,
    fontFamily: "Pretendard",
    fontWeight: "500",
    color: "#FFFFFF",
    textAlign: "center",
  },
});
