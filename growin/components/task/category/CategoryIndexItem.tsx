import { CategoryIndex } from "@/types/category";
import { Ionicons } from "@expo/vector-icons";
import React, { memo } from "react";
import {
  Animated,
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
  renderRightActions?: (
    progress: Animated.AnimatedInterpolation<number>,
    dragX: Animated.AnimatedInterpolation<number>,
    itemId: string
  ) => React.ReactNode;
  containerStyle?: StyleProp<ViewStyle>;
  colorIndicatorStyle?: StyleProp<ViewStyle>;
  nameTextStyle?: StyleProp<TextStyle>;
  rightThreshold?: number;
}

const CategoryIndexItem = memo(({
  item,
  isSelected,
  onPress,
  renderRightActions,
  containerStyle,
  colorIndicatorStyle,
  nameTextStyle,
  rightThreshold = 40,
}: CategoryIndexItemProps) => {
  return (
    <Swipeable
      renderRightActions={
        renderRightActions
          ? (progress, dragX) => renderRightActions(progress, dragX, item.id)
          : undefined
      }
      rightThreshold={rightThreshold}
    >
      <TouchableOpacity
        style={[styles.container, containerStyle]}
        activeOpacity={0.8}
        onPress={onPress}
      >
        <View
          style={[styles.colorIndicator, { backgroundColor: item.color }, colorIndicatorStyle]}
        />
        <Text style={[styles.name, nameTextStyle]}>{item.name}</Text>
        {isSelected && (
          <Ionicons 
                        name="checkmark" 
                        size={20} 
                        color="#FFFFFF" 
                        />
        )}
      </TouchableOpacity>
    </Swipeable>
  );
});

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
});

export default CategoryIndexItem;
