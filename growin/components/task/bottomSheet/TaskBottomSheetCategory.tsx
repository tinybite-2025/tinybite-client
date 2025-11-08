import CategoryColorPicker from "@/components/task/category/CategoryColorPicker";
import CategoryIndexItem from "@/components/task/category/CategoryIndexItem";
import { CategoryColorPalette, CategoryIndex } from "@/types/category";
import { Ionicons } from "@expo/vector-icons";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { Animated, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

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

const TaskBottomSheetCategory = ({ onClose, isVisible }: TaskBottomSheetCategoryProps) => {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ["85%"], []);
  const [calendarIndexes, setCalendarIndexes] = useState<CategoryIndex[]>(INITIAL_INDEXES);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedColor, setSelectedColor] = useState(
    INITIAL_INDEXES[0]?.color ?? COLOR_PALETTE[0]
  );

  useEffect(() => {
    if (isVisible) {
      setTimeout(() => {
        bottomSheetRef.current?.expand();
      }, 100);
    } else {
      bottomSheetRef.current?.close();
    }
  }, [isVisible]);

  const renderIndexRightActions = (
    progress: Animated.AnimatedInterpolation<number>,
    dragX: Animated.AnimatedInterpolation<number>,
    itemId: string
  ) => {
    const scale = dragX.interpolate({
      inputRange: [-100, 0],
      outputRange: [1, 0],
      extrapolate: "clamp",
    });

    return (
      <View style={styles.rightActions}>
        <Animated.View style={{ transform: [{ scale }] }}>
          <TouchableOpacity style={styles.actionButton}>
            <Image
              source={require("@/assets/images/task/taskEdit.png")}
              style={styles.actionIcon}
              resizeMode="contain"
            />
            <Text style={styles.actionText}>수정</Text>
          </TouchableOpacity>
        </Animated.View>
        <Animated.View style={{ transform: [{ scale }] }}>
          <TouchableOpacity style={styles.actionButton} 
                            onPress={() => handleIndexDelete(itemId)}
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

  const handleClose = () => {
    bottomSheetRef.current?.close();
    onClose();
  };

  const handleIndexDelete = (id: string) => {
    setCalendarIndexes((prev) => 
      prev.filter((category) => 
        category.id !== id));
  };

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
          <TouchableOpacity onPress={handleClose}>
            <Ionicons name="chevron-back" 
                      size={24} 
                      color="#FFFFFF" 
                      />
          </TouchableOpacity>
          <Text style={styles.calendarBottomSheetTitle}>캘린더</Text>
          <TouchableOpacity onPress={handleClose}>
            <Text style={styles.calendarConfirmButton}>확인</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.colorSection}>
          <Text style={styles.sectionTitle}>컬러</Text>
          <CategoryColorPicker 
                  colors={COLOR_PALETTE} 
                  selectedColor={selectedColor} 
                  onSelect={setSelectedColor} />
        </View>

        {/* 인덱스 섹션 */}
        <View style={styles.indexSection}>
          <Text style={styles.sectionTitle}>인덱스</Text>
          <View style={styles.indexList}>
            {calendarIndexes.map((indexItem, i) => (
              <CategoryIndexItem
                key={indexItem.id}
                item={indexItem}
                isSelected={selectedIndex === i}
                onPress={() => setSelectedIndex(i)}
                renderRightActions={renderIndexRightActions}
              />
            ))}
            <View style={styles.addIndexItem}>
              <View style={styles.addIndexCircle}>
                <Ionicons name="add" 
                          size={20} 
                          color="#FFFFFF" 
                          />
              </View>
            </View>
          </View>
        </View>
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
  sectionTitle: {
    fontSize: 18,
    fontFamily: "Pretendard",
    fontWeight: "500",
    color: "#FFFFFF",
    marginBottom: 8,
  },
  colorSection: {
    marginBottom: 24,
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

export default TaskBottomSheetCategory;
