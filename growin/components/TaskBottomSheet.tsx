import TaskBottomSheetCategory from "@/components/TaskBottomSheetCategory";
import TaskBottomSheetTaskList from "@/components/TaskBottomSheetTaskList";
import { Ionicons } from "@expo/vector-icons";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { useMemo, useRef, useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface TaskBottomSheetProps {
  onClose: () => void;
}

const TaskBottomSheet = ({ onClose }: TaskBottomSheetProps) => {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const [todos, setTodos] = useState([
    { id: "1", title: "회의록 작성", completed: false },
    { id: "2", title: "회의록 작성", completed: true },
  ]);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [showMenu, setShowMenu] = useState(false);
  const [isCalendarVisible, setIsCalendarVisible] = useState(false);
  const [calendarIndexes, setCalendarIndexes] = useState([
    { id: "cal-1", color: "#C11BEF", name: "잇타 회의" },
    { id: "cal-2", color: "#FF383C", name: "과제" },
    { id: "cal-3", color: "#FF8D28", name: "도서관" },
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedColor, setSelectedColor] = useState("#C11BEF");

  // 바텀시트 스냅 포인트 설정
  const snapPoints = useMemo(() => ["90%"], []);

  return (
    <>
      <BottomSheet
        ref={bottomSheetRef}
        index={0}
        snapPoints={snapPoints}
        enablePanDownToClose
        onClose={onClose}
        backgroundStyle={styles.bottomSheetBackground}
      >
        <BottomSheetView style={styles.bottomSheetContent}>
        {/* 제목 섹션 */}
        <View style={styles.titleSection}>
          <View style={styles.titleColorBar} />
          <View style={styles.titleContent}>
            <Text style={styles.titleText}>잇타 회의</Text>
            <TouchableOpacity
              style={styles.moreButton}
              onPress={() => setShowMenu(!showMenu)}
            >
              <Ionicons name="ellipsis-horizontal" size={20} color="#3F4360" />
            </TouchableOpacity>
            {showMenu && (
              <View style={styles.menuContainer}>
                <TouchableOpacity
                  style={styles.menuItem}
                  onPress={() => setShowMenu(false)}
                >
                  <Text style={styles.menuItemTextDelete}>삭제하기</Text>
                  <Image
                    source={require("@/assets/images/event/eventTrash.png")}
                    style={styles.menuIcon}
                    resizeMode="contain"
                  />
                </TouchableOpacity>
                <View style={styles.menuDivider} />
                <TouchableOpacity
                  style={styles.menuItem}
                  onPress={() => setShowMenu(false)}
                >
                  <Text style={styles.menuItemText}>공유하기</Text>
                  <Ionicons name="share-outline" size={20} color="#FFFFFF" />
                </TouchableOpacity>
              </View>
            )}
          </View>
        </View>
        <View style={styles.divider} />

        {/* 일정 섹션 */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>일정</Text>
          <View style={styles.timeContainer}>
            <View style={styles.timeBlock}>
              <Text style={styles.timeDate}>9월 26일 (토)</Text>
              <Text style={styles.timeValue}>12:00</Text>
            </View>
            <Ionicons
              name="chevron-forward"
              style={styles.timeArrow}
              resizeMode="contain"
            />
            <View style={styles.timeBlock}>
              <Text style={styles.timeDate}>9월 26일 (토)</Text>
              <Text style={styles.timeValue}>13:00</Text>
            </View>
          </View>
        </View>

        {/* 캘린더 섹션 */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>캘린더</Text>
          <TouchableOpacity
            style={styles.calendarButton}
            onPress={() => setIsCalendarVisible(true)}
          >
            <View style={styles.calendarIcon} />
            <Text style={styles.calendarText}>잇타 회의</Text>
          </TouchableOpacity>
        </View>

        {/* 반복 섹션 */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>반복</Text>
          <TouchableOpacity style={styles.repeatButton}>
            <Text style={styles.repeatText}>안함</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.divider} />

        {/* 할 일 섹션 */}
        <TaskBottomSheetTaskList
          todos={todos}
          editingId={editingId}
          setEditingId={setEditingId}
          toggleTodo={(id) => {
            setTodos((prevTodos) =>
              prevTodos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
              )
            );
          }}
          deleteTodo={(id) => {
            setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
          }}
          addTodo={() => {
            const newId = `todo-${Date.now()}`;
            setTodos((prevTodos) => [
              ...prevTodos,
              { id: newId, title: "", completed: false },
            ]);
            setEditingId(newId);
          }}
        />
        </BottomSheetView>
      </BottomSheet>
      <TaskBottomSheetCategory
        calendarIndexes={calendarIndexes}
        selectedIndex={selectedIndex}
        selectedColor={selectedColor}
        onIndexChange={(idx: number) => setSelectedIndex(idx)}
        onColorChange={(color: string) => setSelectedColor(color)}
        onIndexDelete={(id: string) =>
          setCalendarIndexes((prev) => prev.filter((calendar) => calendar.id !== id))
        }
        onClose={() => setIsCalendarVisible(false)}
        isVisible={isCalendarVisible}
      />
    </>
  );
};

const styles = StyleSheet.create({
  bottomSheetBackground: {
    backgroundColor: "#2A2C45",
  },
  bottomSheetContent: {
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 40,
  },
  // 제목 섹션
  titleSection: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  titleColorBar: {
    width: 15,
    height: 55,
    backgroundColor: "#C11BEF",
    borderRadius: 15,
    marginRight: 12,
  },
  titleContent: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    position: "relative",
  },
  titleText: {
    fontSize: 20,
    fontFamily: "Pretendard",
    fontWeight: "700",
    color: "#FFFFFF",
  },
  moreButton: {
    marginTop: -20,
  },
  menuContainer: {
    position: "absolute",
    top: -5,
    right: -10,
    backgroundColor: "rgba(37, 37, 37, 0.5)",
    borderRadius: 15,
    overflow: "hidden",
    width: 254,
    zIndex: 1000,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: 254,
    height: 46,
    paddingTop: 11,
    paddingRight: 16,
    paddingBottom: 11,
    paddingLeft: 16,
  },
  menuDivider: {
    height: 5,
    backgroundColor: "#000000",
    opacity: 0.1,
  },
  menuIcon: {
    width: 20,
    height: 20,
    marginLeft: 12,
  },
  menuItemText: {
    fontSize: 16,
    fontFamily: "Pretendard",
    fontWeight: "500",
    color: "#FFFFFF",
    flex: 1,
  },
  menuItemTextDelete: {
    fontSize: 16,
    fontFamily: "Pretendard",
    fontWeight: "500",
    color: "#FF008B",
  },
  // 섹션 공통
  section: {
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 18,
    fontFamily: "Pretendard",
    fontWeight: "500",
    color: "#FFFFFF",
    marginBottom: 8,
  },
  divider: {
    width: 351,
    height: 1,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    marginBottom: 12,
  },
  // 일정 섹션
  timeContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  timeBlock: {
    alignItems: "flex-start",
  },
  timeDate: {
    fontSize: 13,
    fontFamily: "Pretendard",
    fontWeight: "500",
    color: "#FFFFFF",
  },
  timeValue: {
    fontSize: 18,
    fontFamily: "Pretendard",
    fontWeight: "500",
    color: "#FFFFFF",
  },
  timeArrow: {
    marginLeft: 8,
    width: 24,
    height: 24,
    color: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
  },
  // 캘린더 섹션
  calendarButton: {
    flexDirection: "row",
    alignItems: "center",
    width: 107,
    height: 36,
    backgroundColor: "#3F4360",
    borderRadius: 15,
    paddingTop: 8,
    paddingRight: 15,
    paddingBottom: 8,
    paddingLeft: 15,
  },
  calendarIcon: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: "#C11BEF",
    marginRight: 8,
  },
  calendarText: {
    fontSize: 13,
    fontFamily: "Pretendard",
    fontWeight: "500",
    color: "#FFFFFF",
  },
  // 반복 섹션
  repeatButton: {
    width: 53,
    height: 33,
    backgroundColor: "#3F4360",
    borderRadius: 15,
    paddingTop: 8,
    paddingRight: 15,
    paddingBottom: 8,
    paddingLeft: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  repeatText: {
    fontSize: 14,
    fontFamily: "Pretendard",
    fontWeight: "500",
    color: "#FFFFFF",
  },
});

export default TaskBottomSheet;
