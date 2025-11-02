import { Ionicons } from "@expo/vector-icons";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { useMemo, useRef, useState } from "react";
import { Animated, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Swipeable } from "react-native-gesture-handler";

interface TaskBottomSheetProps {
  onClose: () => void;
}

export default function TaskBottomSheet({ onClose }: TaskBottomSheetProps) {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const [todos, setTodos] = useState([
    { id: "1", title: "회의록 작성", completed: false },
    { id: "2", title: "회의록 작성", completed: true },
  ]);
  const [editingId, setEditingId] = useState<string | null>(null);

  // 바텀시트 스냅 포인트 설정
  const snapPoints = useMemo(() => ["90%"], []);

  // 할 일 토글
  const toggleTodo = (id: string) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // 할 일 추가
  const addTodo = () => {
    const newId = `todo-${Date.now()}`;
    setTodos((prevTodos) => [...prevTodos, { id: newId, title: "", completed: false }]);
    setEditingId(newId);
  };

  // 할 일 삭제
  const deleteTodo = (id: string) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  // 스와이프 액션 렌더링 (왼쪽에서 오른쪽으로 스와이프)
  const renderRightActions = (
    progress: Animated.AnimatedInterpolation<number>,
    dragX: Animated.AnimatedInterpolation<number>,
    itemId: string
  ) => {
    const scale = dragX.interpolate({
      inputRange: [-100, 0],
      outputRange: [1, 0],
      extrapolate: "clamp",
    });

    return (
      <View style={styles.rightActions}>
        <Animated.View style={{ transform: [{ scale }] }}>
          <TouchableOpacity style={styles.actionButton}>
            <Image
              source={require('../../assets/images/task/taskEdit.png')}
              style={styles.actionIcon}
              resizeMode="contain"
            />
            <Text style={styles.actionText}>수정</Text>
          </TouchableOpacity>
        </Animated.View>
        <Animated.View style={{ transform: [{ scale }] }}>
          <TouchableOpacity 
            style={styles.actionButton}
            onPress={() => deleteTodo(itemId)}
          >
            <Image
              source={require('../../assets/images/task/tastDelete.png')}
              style={styles.actionIcon}
              resizeMode="contain"
            />
            <Text style={styles.actionText}>삭제</Text>
          </TouchableOpacity>
        </Animated.View>
      </View>
    );
  };

  return (
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
            <TouchableOpacity>
              <Ionicons name="ellipsis-horizontal" size={20} color="#3F4360" />
            </TouchableOpacity>
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
            <Ionicons name="chevron-forward" 
            style={styles.timeArrow} resizeMode="contain" />
            <View style={styles.timeBlock}>
              <Text style={styles.timeDate}>9월 26일 (토)</Text>
              <Text style={styles.timeValue}>13:00</Text>
            </View>
          </View>
        </View>

        {/* 캘린더 섹션 */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>캘린더</Text>
          <TouchableOpacity style={styles.calendarButton}>
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
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>할 일</Text>
          {todos.map((todo) => (
            editingId === todo.id ? (
              <View key={todo.id} style={styles.todoItem}>
                <TextInput
                  style={styles.todoInput}
                  placeholder="할 일 입력..."
                  placeholderTextColor="#8E8E93"
                  autoFocus
                  returnKeyType="done"
                  onChangeText={(text) => {
                    setTodos((prevTodos) =>
                      prevTodos.map((t) =>
                        t.id === todo.id ? { ...t, title: text } : t
                      )
                    );
                  }}
                  onSubmitEditing={() => {
                    setEditingId(null);
                  }}
                />
              </View>
            ) : (
              <Swipeable
                key={todo.id}
                renderRightActions={(progress, dragX) => renderRightActions(progress, dragX, todo.id)}
                rightThreshold={40}
              >
                <View style={styles.todoItem}>
                  <Text style={[styles.todoText, todo.completed && styles.todoTextCompleted]}>
                    {todo.title}
                  </Text>
                  <TouchableOpacity
                    onPress={() => toggleTodo(todo.id)}
                    style={styles.todoToggle}
                  >
                    {todo.completed ? (
                      <View style={styles.todoChecked}>
                        <View style={styles.todoCheckedInner} />
                      </View>
                    ) : (
                      <View style={styles.todoUnchecked} />
                    )}
                  </TouchableOpacity>
                </View>
              </Swipeable>
            )
          ))}
            <TouchableOpacity style={styles.taskAddButton} onPress={addTodo}>
                <View style={styles.taskAddCircle}>
                    <Ionicons name="add" size={20} color="#FFFFFF" />
                </View>
            </TouchableOpacity>
        </View>
      </BottomSheetView>
    </BottomSheet>
  );
}

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
    alignItems: "center",
    justifyContent: "space-between",
  },
  titleText: {
    fontSize: 20,
    fontFamily: "Pretendard",
    fontWeight: "700",
    color: "#FFFFFF",
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
  // 할 일 섹션
  todoItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#3F4360",
    borderRadius: 15,
    width: 350,
    height: 40,
    paddingHorizontal: 13,
    marginBottom: 4,
  },
  todoText: {
    flex: 1,
    fontSize: 13,
    fontFamily: "Pretendard",
    fontWeight: "500",
    color: "#FFFFFF",
  },
  todoTextCompleted: {
    color: "#8E8E93",
  },
  todoInput: {
    flex: 1,
    fontSize: 13,
    fontFamily: "Pretendard",
    fontWeight: "500",
    color: "#FFFFFF",
  },
  todoToggle: {
    width: 24,
    height: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  todoUnchecked: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "#2A2C45",
    borderStyle: "solid"
  },
  todoChecked: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: "#FF008B",
    justifyContent: "center",
    alignItems: "center",
  },
  todoCheckedInner: {
    width: 20,
    height: 20,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "#3F4360",
    borderStyle: "solid"
  },
  rightActions: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    width: 100,
  },
  actionButton: {
    width: 50,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
  },
  actionIcon: {
    width: 18,
    height: 18,
  },
  actionText: {
    fontSize: 8,
    fontFamily: "Pretendard",
    fontWeight: "500",
    color: "#8E8E93",
    marginTop: 4,
    textAlign: "center",
  },
  // 추가 버튼
  taskAddButton: {
    width: 350,
    height: 40,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#3F4360",
    borderRadius: 15,
  },
  taskAddCircle: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: "#2A2C45",
    alignItems: "center",
    justifyContent: "center",
  },
});

