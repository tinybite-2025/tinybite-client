import { CategoryColor, CategoryColorPalette } from "@/types/category";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";

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
        <TouchableOpacity
          key={color}
          style={styles.colorSwatch}
          onPress={() => onSelect(color)}
        >
          <View style={[styles.colorCircle, { backgroundColor: color }]}
          >
            {selectedColor === color && (
              <Ionicons name="checkmark" size={24} color="#FFFFFF" />
            )}
          </View>
        </TouchableOpacity>
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
  colorSwatch: {
    width: "12.5%",
    padding: 4,
  },
  colorCircle: {
    width: 32,
    height: 32,
    aspectRatio: 1,
    borderRadius: 1000,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CategoryColorPicker;

