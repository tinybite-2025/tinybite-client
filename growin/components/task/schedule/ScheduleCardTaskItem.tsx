import { ScheduleCardTaskItemType } from "@/types/Schedule";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

interface ScheduleCardTaskItemProps {
  todo: ScheduleCardTaskItemType;
}

const ScheduleCardTaskItem = ({ todo }: ScheduleCardTaskItemProps) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
        justifyContent: "space-between",
        paddingTop: 6.5,
        borderTopWidth: 1,
        borderTopColor: "#ffffff1a",
      }}
    >
      <Text
        style={{
          color: todo.done ? "#8E8E93" : "#fff",
          fontSize: 13,
          fontWeight: "500",
          lineHeight: 18.9241,
        }}
      >
        {todo.text}
      </Text>

      <TouchableOpacity>
        {todo.done ? (
          // 체크 활성
          <View
            style={{
              width: 20,
              height: 20,
              borderWidth: 2,
              borderRadius: 10,
              borderColor: "#FF008B",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <View
              style={{
                width: 12,
                height: 12,
                borderRadius: 6,
                backgroundColor: "#FF008B",
              }}
            />
          </View>
        ) : (
          // 체크 비활성
          <View
            style={{
              width: 20,
              height: 20,
              borderRadius: 10,
              borderWidth: 2,
              borderColor: "#3F4360",
            }}
          />
        )}
      </TouchableOpacity>
    </View>
  );
};

export default ScheduleCardTaskItem;
