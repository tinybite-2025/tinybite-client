import { CategoryColor } from "@/types/category";
import { Ionicons } from "@expo/vector-icons";
import React, { memo } from "react";
import {
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";

interface CategoryColorSwatchItemProps {
  color: CategoryColor;
  isSelected: boolean;
  onPress: (color: CategoryColor) => void;
  containerStyle?: StyleProp<ViewStyle>;
}

const CategoryColorSwatchItem = memo(({
  color,
  isSelected,
  onPress,
  containerStyle,
}: CategoryColorSwatchItemProps) => {
  const handlePress = () => {
    onPress(color);
  };

  return (
    <TouchableOpacity
      style={[styles.swatch, containerStyle]}
      activeOpacity={0.8}
      onPress={handlePress}
    >
      <View style={[styles.circle, { backgroundColor: color }]}>
        {isSelected && <Ionicons 
                          name="checkmark" 
                          size={24} 
                          color="#FFFFFF" 
                          />
                      }
      </View>
    </TouchableOpacity>
  );
});

CategoryColorSwatchItem.displayName = "CategoryColorSwatchItem";

const styles = StyleSheet.create({
  swatch: {
    width: "12.5%",
    padding: 4,
  },
  circle: {
    width: 32,
    height: 32,
    aspectRatio: 1,
    borderRadius: 1000,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CategoryColorSwatchItem;
