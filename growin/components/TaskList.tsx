import { useEffect, useRef, useState } from "react";
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

interface TaskListProps {
  id: string;
  title: string;
  completed: boolean;
  isRepeatable: boolean;
  onToggle: (id: string) => void;
  onTitleChange?: (title: string) => void;
}

const TaskList = ({
  id,
  title,
  completed,
  isRepeatable,
  onToggle,
  onTitleChange,
}: TaskListProps) => {
  const [swipeableRef, setSwipeableRef] = useState<any>(null);
  const [isEditing, setIsEditing] = useState(title === ""); // 제목이 비어있으면 편집 모드
  const [editTitle, setEditTitle] = useState(title);
  const inputRef = useRef<TextInput>(null);

  // 편집 모드가 되면 자동으로 포커스
  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isEditing]);

  // title이 변경되면 editTitle도 업데이트
  useEffect(() => {
    setEditTitle(title);
  }, [title]);

  // 스와이프 시 나타나는 오른쪽 액션 버튼들
  const renderRightActions = (
    progress: Animated.AnimatedInterpolation<number>,
    dragX: Animated.AnimatedInterpolation<number>
  ) => {
    // 스와이프 애니메이션 효과
    const scale = dragX.interpolate({
      inputRange: [-100, 0],
      outputRange: [1, 0],
      extrapolate: "clamp",
    });

    return (
      <View style={[styles.rightActions, { width: isRepeatable ? 160 : 110 }]}>
        {/* 반복 버튼 (언젠가 할 일에서는 숨김) */}
        {isRepeatable && (
          <TouchableOpacity
            style={[styles.actionButton]}
            onPress={() => swipeableRef?.close()}
          >
            <Animated.View style={{ transform: [{ scale }] }}>
              <Image
                source={require("@/assets/images/task/taskRepeat.png")}
                style={styles.actionIcon}
                resizeMode="contain"
              />
              <Text style={styles.actionText}>반복</Text>
            </Animated.View>
          </TouchableOpacity>
        )}
        {/* 수정 버튼 */}
        <TouchableOpacity
          style={[styles.actionButton]}
          onPress={() => swipeableRef?.close()}
        >
          <Animated.View style={{ transform: [{ scale }] }}>
            <Image
              source={require("@/assets/images/task/taskEdit.png")}
              style={styles.actionIcon}
              resizeMode="contain"
            />
            <Text style={styles.actionText}>수정</Text>
          </Animated.View>
        </TouchableOpacity>
        {/* 삭제 버튼 */}
        <TouchableOpacity
          style={[styles.actionButton]}
          onPress={() => swipeableRef?.close()}
        >
          <Animated.View style={{ transform: [{ scale }] }}>
            <Image
              source={require("@/assets/images/task/tastDelete.png")}
              style={styles.actionIcon}
              resizeMode="contain"
            />
            <Text style={styles.actionText}>삭제</Text>
          </Animated.View>
        </TouchableOpacity>
      </View>
    );
  };

  // 편집 모드: 텍스트 입력 필드 표시
  if (isEditing) {
    return (
      <View style={styles.taskItem}>
        <TextInput
          ref={inputRef}
          style={styles.taskInput}
          value={editTitle}
          onChangeText={setEditTitle}
          placeholder="할 일 입력..."
          placeholderTextColor="#8E8E93"
          onBlur={() => {
            // 포커스가 벗어나면 제목 업데이트하고 편집 모드 종료
            onTitleChange?.(editTitle);
            setIsEditing(false);
          }}
        />
      </View>
    );
  }

  // 일반 모드: 스와이프 가능한 할 일 항목 표시
  return (
    <Swipeable
      ref={(ref) => setSwipeableRef(ref)}
      renderRightActions={renderRightActions}
      rightThreshold={40}
    >
      <View style={styles.taskItem}>
        <TouchableOpacity
          style={styles.taskContent}
          onPress={() => onToggle(id)}
          activeOpacity={0.7}
        >
          <Text
            style={[
              styles.taskText,
              completed && styles.taskTextCompleted, // 완료된 항목은 회색 표시
            ]}
          >
            {title}
          </Text>
          <View style={styles.toggleContainer}>
            {/* 완료/미완료 토글 표시 */}
            {completed ? (
              <View style={styles.toggleChecked}>
                <View style={styles.toggleCheckedInner} />
              </View>
            ) : (
              <View style={styles.toggleUnchecked} />
            )}
          </View>
        </TouchableOpacity>
      </View>
    </Swipeable>
  );
};

export default TaskList;

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
    marginBottom: 4,
  },
  taskContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  taskInput: {
    fontSize: 13,
    lineHeight: 16.9,
    fontFamily: "Pretendard",
    fontWeight: "500",
    color: "#FFFFFF",
    flex: 1,
    width: "100%",
  },
  taskText: {
    fontSize: 13,
    lineHeight: 16.9,
    fontFamily: "Pretendard",
    fontWeight: "500",
    color: "#FFFFFF",
    flex: 1,
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
  rightActions: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    width: 150,
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
});
