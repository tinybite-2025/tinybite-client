import { useState } from "react";
import { Animated, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Swipeable } from "react-native-gesture-handler";

interface TaskItemProps {
  id: string;
  title: string;
  completed: boolean;
  useDashed?: boolean;
  showRepeat?: boolean;
  onToggle: (id: string) => void;
}

export default function TaskItem({
  id,
  title,
  completed,
  useDashed = false,
  showRepeat = true,
  onToggle,
}: TaskItemProps) {
  const [swipeableRef, setSwipeableRef] = useState<any>(null);

  const renderRightActions = (
    progress: Animated.AnimatedInterpolation<number>,
    dragX: Animated.AnimatedInterpolation<number>
  ) => {
    const scale = dragX.interpolate({
      inputRange: [-100, 0],
      outputRange: [1, 0],
      extrapolate: "clamp",
    });

    return (
      <View style={[styles.rightActions, { width: showRepeat ? 160 : 110 }]}>
        {showRepeat && (
          <TouchableOpacity
            style={[styles.actionButton]}
            onPress={() => swipeableRef?.close()}
          >
            <Animated.View style={{ transform: [{ scale }] }}>
              <Image 
                source={require('../../assets/images/task/taskRepeat.png')} 
                style={styles.actionIcon}
                resizeMode="contain"
              />
              <Text style={styles.actionText}>반복</Text>
            </Animated.View>
          </TouchableOpacity>
        )}
        <TouchableOpacity
          style={[styles.actionButton]}
          onPress={() => swipeableRef?.close()}
        >
          <Animated.View style={{ transform: [{ scale }] }}>
            <Image 
              source={require('../../assets/images/task/taskEdit.png')} 
              style={styles.actionIcon}
              resizeMode="contain"
            />
            <Text style={styles.actionText}>수정</Text>
          </Animated.View>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.actionButton]}
          onPress={() => swipeableRef?.close()}
        >
          <Animated.View style={{ transform: [{ scale }] }}>
            <Image 
              source={require('../../assets/images/task/tastDelete.png')} 
              style={styles.actionIcon}
              resizeMode="contain"
            />
            <Text style={styles.actionText}>삭제</Text>
          </Animated.View>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <Swipeable
      ref={(ref) => setSwipeableRef(ref)}
      renderRightActions={renderRightActions}
      rightThreshold={40}
    >
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
    </Swipeable>
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
    marginBottom: 4,
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

