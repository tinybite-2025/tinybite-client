import { TaskBottomSheetTodoList, TaskBottomSheetTodoType } from "@/types/task";
import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
    Animated,
    Image,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import { Swipeable } from "react-native-gesture-handler";

const INITIAL_TODOS: TaskBottomSheetTodoList = [
  { id: "todo-1", title: "회의록 작성", completed: false },
  { id: "todo-2", title: "회의 준비", completed: true },
];

const TaskBottomSheetTaskList = () => {
  const [todos, setTodos] = useState<TaskBottomSheetTodoList>(INITIAL_TODOS);
  const [editingId, setEditingId] = useState<string | null>(null);

  const toggleTodo = (id: TaskBottomSheetTodoType["id"]) => {
    setTodos((prev) =>
      prev.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo))
    );
  };

  const deleteTodo = (id: TaskBottomSheetTodoType["id"]) => {
    setTodos((prev) => 
        prev.filter((todo) => 
            todo.id !== id));
    if (editingId === id) {
      setEditingId(null);
    }
  };

  const updateTodoTitle = (id: TaskBottomSheetTodoType["id"], title: string) => {
    setTodos((prev) => 
        prev.map((todo) => 
            (todo.id === id ? { ...todo, title } : todo)));
  };

  const addTodo = () => {
    const newId = `todo-${Date.now()}`;
    const newTodo: TaskBottomSheetTodoType = {
      id: newId,
      title: "",
      completed: false,
    };
    setTodos((prev) => [...prev, newTodo]);
    setEditingId(newId);
  };

  const renderRightActions = (
    progress: Animated.AnimatedInterpolation<number>,
    dragX: Animated.AnimatedInterpolation<number>,
    itemId: TaskBottomSheetTodoType["id"]
  ) => {
    const scale = dragX.interpolate({
      inputRange: [-100, 0],
      outputRange: [1, 0],
      extrapolate: "clamp",
    });

    return (
      <View style={styles.rightActions}>
        <Animated.View style={{ transform: [{ scale }] }}>
          <TouchableOpacity 
                style={styles.actionButton} 
                onPress={() => setEditingId(itemId)}
                >
            <Image
              source={require("@/assets/images/task/taskEdit.png")}
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
              source={require("@/assets/images/task/taskDelete.png")}
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
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>할 일</Text>
      {todos.map((todo) =>
        editingId === todo.id ? (
          <View key={todo.id} style={styles.todoItem}>
            <TextInput
              style={styles.todoInput}
              value={todo.title}
              placeholder="할 일 입력..."
              placeholderTextColor="#8E8E93"
              autoFocus
              returnKeyType="done"
              onChangeText={(text) => updateTodoTitle(todo.id, text)}
              onSubmitEditing={() => setEditingId(null)}
              onBlur={() => setEditingId(null)}
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
      )}
      <TouchableOpacity 
            style={styles.taskAddButton} 
            onPress={addTodo}
            >
        <View style={styles.taskAddCircle}>
          <Ionicons name="add" size={20} color="#FFFFFF" />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    marginBottom: 12,
    width: 350,
  },
  sectionTitle: {
    fontSize: 18,
    fontFamily: "Pretendard",
    fontWeight: "500",
    color: "#FFFFFF",
    marginBottom: 8,
  },
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
    borderStyle: "solid",
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
    borderStyle: "solid",
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

export default TaskBottomSheetTaskList;
