import CategoryIndexEditor from "@/components/task/category/CategoryIndexEditor";
import CategoryIndexItem from "@/components/task/category/CategoryIndexItem";
import { CategoryColor, CategoryColorPalette, CategoryIndex } from "@/types/category";
import { Ionicons } from "@expo/vector-icons";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface TaskBottomSheetCategoryProps {
  onClose: () => void;
  isVisible: boolean;
}

const COLOR_PALETTE: CategoryColorPalette = [
  "#FF383C","#EF534F","#FF8D28","#FFCC00","#34C759","#00C8B3","#00C0E8","#0088FF",
  "#6155F5","#C11BEF","#A218A0","#EC417A","#FF2D55","#F6AFC7","#B2EE71","#95E1BA",
  "#26C6DC","#AC7F5E","#7E7E7E",
];

const INITIAL_INDEXES: CategoryIndex[] = [
  { id: "cal-1", color: "#C11BEF", name: "잇타 회의" },
  { id: "cal-2", color: "#FF383C", name: "과제" },
  { id: "cal-3", color: "#FF8D28", name: "도서관" },
];

const TaskBottomSheetCategory = ({
  onClose,
  isVisible,
}: TaskBottomSheetCategoryProps) => {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ["85%"], []);
  const [calendarIndexes, setCalendarIndexes] = useState<CategoryIndex[]>(INITIAL_INDEXES);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [editorMode, setEditorMode] = useState<"add" | "edit" | null>(null);
  const [editorName, setEditorName] = useState("");
  const [editorColor, setEditorColor] = useState<CategoryColor>(COLOR_PALETTE[0]);

  const isEditorMode = editorMode !== null;

  useEffect(() => {
    if (isVisible) {
      setTimeout(() => {
        bottomSheetRef.current?.expand();
      }, 100);
    } else {
      bottomSheetRef.current?.close();
      setEditorMode(null);
      setEditorName("");
      setEditorColor(COLOR_PALETTE[0]);
      setSelectedIndex(0);
    }
  }, [isVisible]);

  const handleIndexDelete = (id: string) => {
    setCalendarIndexes((prev) => {
      const deleteIndex = prev.findIndex((category) => category.id === id);
      if (deleteIndex === -1) {
        return prev;
      }

      const updated = prev.filter((category) => category.id !== id);

      setSelectedIndex((prevSelected) => {
        if (updated.length === 0) {
          return -1;
        }

        if (prevSelected > deleteIndex) {
          return prevSelected - 1;
        }

        if (prevSelected === deleteIndex) {
          return Math.min(deleteIndex, updated.length - 1);
        }

        return prevSelected;
      });

      return updated;
    });
  };

  const handleIndexEdit = (id: string) => {
    const targetIndex = calendarIndexes.findIndex((category) => category.id === id);
    if (targetIndex === -1) {
      return;
    }

    const target = calendarIndexes[targetIndex];
    setEditorMode("edit");
    setEditorName(target.name);
    setEditorColor(target.color);
    setSelectedIndex(targetIndex);
  };

  const handleClose = () => {
    bottomSheetRef.current?.close();
    onClose();
  };

  const handleAddIndexPress = () => {
    setEditorMode("add");
    setEditorName("");
    setEditorColor(COLOR_PALETTE[0]);
  };

  const handleEditorConfirm = () => {
    if (!isEditorMode) {
      handleClose();
      return;
    }

    if (editorName.trim().length === 0) {
      return;
    }

    setEditorMode(null);
  };

  const handleEditorCancel = () => {
    setEditorMode(null);
  };

  const isConfirmDisabled = isEditorMode && editorName.trim().length === 0;
  const editorTitle = editorMode === "edit" ? "인덱스 수정" : "인덱스 추가";

  return (
    <BottomSheet
      ref={bottomSheetRef}
      index={-1}
      snapPoints={snapPoints}
      enablePanDownToClose
      onClose={onClose}
      backgroundStyle={styles.bottomSheetBackground}
    >
      <BottomSheetView style={styles.calendarBottomSheetContent}>
        <View style={styles.calendarHeader}>
          <TouchableOpacity
            onPress={isEditorMode ? handleEditorCancel : handleClose}
          >
            <Ionicons name="chevron-back" size={24} color="#FFFFFF" />
          </TouchableOpacity>
          <Text style={styles.calendarBottomSheetTitle}>
            {isEditorMode ? editorTitle : "캘린더"}
          </Text>
          <TouchableOpacity
            onPress={handleEditorConfirm}
            disabled={isConfirmDisabled}
          >
            <Text
              style={[
                styles.calendarConfirmButton,
                isConfirmDisabled && styles.calendarConfirmButtonDisabled,
              ]}
            >
              확인
            </Text>
          </TouchableOpacity>
        </View>

        {isEditorMode ? (
          <CategoryIndexEditor
            colors={COLOR_PALETTE}
            color={editorColor}
            name={editorName}
            onColorChange={setEditorColor}
            onNameChange={setEditorName}
          />
        ) : (
          <View style={styles.indexSection}>
            <Text style={styles.sectionTitle}>인덱스</Text>
            <View style={styles.indexList}>
              {calendarIndexes.map((indexItem, i) => (
                <CategoryIndexItem
                  key={indexItem.id}
                  item={indexItem}
                  isSelected={selectedIndex === i}
                  onPress={() => setSelectedIndex(i)}
                  onEdit={handleIndexEdit}
                  onDelete={handleIndexDelete}
                />
              ))}
              <TouchableOpacity
                style={styles.addIndexItem}
                activeOpacity={0.8}
                onPress={handleAddIndexPress}
              >
                <View style={styles.addIndexCircle}>
                  <Ionicons name="add" size={20} color="#FFFFFF" />
                </View>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </BottomSheetView>
    </BottomSheet>
  );
};

const styles = StyleSheet.create({
  bottomSheetBackground: {
    backgroundColor: "#2A2C45",
  },
  calendarBottomSheetContent: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 40,
  },
  calendarHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  calendarBottomSheetTitle: {
    fontSize: 20,
    fontFamily: "Pretendard",
    fontWeight: "700",
    color: "#FFFFFF",
  },
  calendarConfirmButton: {
    fontSize: 18,
    fontFamily: "Pretendard",
    fontWeight: "500",
    color: "#FFFFFF",
  },
  calendarConfirmButtonDisabled: {
    color: "#6D728F",
  },
  sectionTitle: {
    fontSize: 18,
    fontFamily: "Pretendard",
    fontWeight: "500",
    color: "#FFFFFF",
    marginBottom: 8,
  },
  indexSection: {},
  indexList: {
    marginTop: 4,
  },
  addIndexItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#3F4360",
    borderRadius: 15,
    paddingHorizontal: 15,
    paddingVertical: 6,
    marginBottom: 8,
  },
  addIndexCircle: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: "#2A2C45",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default TaskBottomSheetCategory;
