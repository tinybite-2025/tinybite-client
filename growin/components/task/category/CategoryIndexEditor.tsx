import CategoryColorPicker from "@/components/task/category/CategoryColorPicker";
import { CategoryColor, CategoryColorPalette } from "@/types/category";
import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

interface CategoryIndexEditorProps {
  colors: CategoryColorPalette;
  color: CategoryColor;
  name: string;
  onColorChange: (color: CategoryColor) => void;
  onNameChange: (name: string) => void;
}

const CategoryIndexEditor = ({
  colors,
  color,
  name,
  onColorChange,
  onNameChange,
}: CategoryIndexEditorProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>컬러</Text>
      <CategoryColorPicker
        colors={colors}
        selectedColor={color}
        onSelect={onColorChange}
      />

      <View style={styles.inputSection}>
        <Text style={styles.sectionTitle}>인덱스 이름</Text>
        <TextInput
          style={styles.indexNameInput}
          placeholder="인덱스 이름을 입력하세요"
          placeholderTextColor="#8E8E93"
          value={name}
          onChangeText={onNameChange}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontFamily: "Pretendard",
    fontWeight: "500",
    color: "#FFFFFF",
    marginBottom: 4,
  },
  inputSection: {
    gap: 8,
  },
  indexNameInput: {
    height: 56,
    borderRadius: 15,
    backgroundColor: "#3F4360",
    paddingHorizontal: 16,
    fontSize: 16,
    fontFamily: "Pretendard",
    fontWeight: "500",
    color: "#FFFFFF",
  },
});

export default CategoryIndexEditor;

