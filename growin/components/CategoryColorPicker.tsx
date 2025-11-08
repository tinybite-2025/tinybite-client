import CategoryColorSwatchItem from "@/components/CategoryColorSwatchItem";
import { CategoryColor, CategoryColorPalette } from "@/types/category";
import React from "react";
import { StyleSheet, View } from "react-native";

interface CategoryColorPickerProps {
  colors: CategoryColorPalette;
  selectedColor: CategoryColor;
  onSelect: (color: CategoryColor) => void;
}

const CategoryColorPicker = ({ colors, selectedColor, onSelect }: 
  CategoryColorPickerProps) => {
  return (
    <View style={styles.colorGrid}>
      {colors.map((color) => (
        <CategoryColorSwatchItem
          key={color}
          color={color}
          isSelected={selectedColor === color}
          onPress={onSelect}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  colorGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    backgroundColor: "#3F4360",
    borderRadius: 15,
    padding: 15,
    marginTop: 4,
  },
});

export default CategoryColorPicker;

