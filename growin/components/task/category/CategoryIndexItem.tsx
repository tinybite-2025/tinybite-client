import { CategoryIndex } from "@/types/category";
import { Ionicons } from "@expo/vector-icons";
import React, { memo } from "react";
import {
  Animated,
  Image,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import { Swipeable } from "react-native-gesture-handler";

interface CategoryIndexItemProps {
  item: CategoryIndex;
  isSelected: boolean;
  onPress: () => void;
  onEdit?: (id: string) => void;
  onDelete?: (id: string) => void;
  containerStyle?: StyleProp<ViewStyle>;
  colorIndicatorStyle?: StyleProp<ViewStyle>;
  nameTextStyle?: StyleProp<TextStyle>;
  rightThreshold?: number;
}

const CategoryIndexItem = memo(
  ({
    item,
    isSelected,
    onPress,
    onEdit,
    onDelete,
    containerStyle,
    colorIndicatorStyle,
    nameTextStyle,
    rightThreshold = 40,
  }: CategoryIndexItemProps) => {
    const hasActions = Boolean(onEdit || onDelete);

    const renderRightActions = hasActions
      ? (
          progress: Animated.AnimatedInterpolation<number>,
          dragX: Animated.AnimatedInterpolation<number>
        ) => {
          const scale = dragX.interpolate({
            inputRange: [-100, 0],
            outputRange: [1, 0],
            extrapolate: "clamp",
          });

          return (
            <View style={styles.rightActions}>
              {onEdit && (
                <Animated.View style={{ transform: [{ scale }] }}>
                  <TouchableOpacity
                    style={styles.actionButton}
                    onPress={() => onEdit(item.id)}
                  >
                    <Image
                      source={require("@/assets/images/task/taskEdit.png")}
                      style={styles.actionIcon}
                      resizeMode="contain"
                    />
                    <Text style={styles.actionText}>수정</Text>
                  </TouchableOpacity>
                </Animated.View>
              )}
              {onDelete && (
                <Animated.View style={{ transform: [{ scale }] }}>
                  <TouchableOpacity
                    style={styles.actionButton}
                    onPress={() => onDelete(item.id)}
                  >
                    <Image
                      source={require("@/assets/images/task/taskDelete.png")}
                      style={styles.actionIcon}
                      resizeMode="contain"
                    />
                    <Text style={styles.actionText}>삭제</Text>
                  </TouchableOpacity>
                </Animated.View>
              )}
            </View>
          );
        }
      : undefined;

    return (
      <Swipeable renderRightActions={renderRightActions} rightThreshold={rightThreshold}>
        <TouchableOpacity
          style={[styles.container, containerStyle]}
          activeOpacity={0.8}
          onPress={onPress}
        >
          <View
            style={[
              styles.colorIndicator,
              { backgroundColor: item.color },
              colorIndicatorStyle,
            ]}
          />
          <Text style={[styles.name, nameTextStyle]}>{item.name}</Text>
          {isSelected && <Ionicons name="checkmark" size={20} color="#FFFFFF" />}
        </TouchableOpacity>
      </Swipeable>
    );
  }
);

CategoryIndexItem.displayName = "CategoryIndexItem";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#3F4360",
    borderRadius: 15,
    paddingHorizontal: 15,
    paddingVertical: 8,
    marginBottom: 4,
  },
  colorIndicator: {
    width: 24,
    height: 24,
    borderRadius: 12,
    marginRight: 8,
  },
  name: {
    flex: 1,
    fontSize: 15,
    fontFamily: "Pretendard",
    fontWeight: "500",
    color: "#FFFFFF",
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
});

export default CategoryIndexItem;
