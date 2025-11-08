import ScheduleCardTodo from "@/components/task/schedule/ScheduleCardTaskItem";
import { ScheduleCardTaskItemType } from "@/types/Schedule";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

interface ScheduleCardProps {
  id: number;
  title: string;
  time: string;
  todos: ScheduleCardTaskItemType[];
}

const ScheduleCard = ({ id, title, time, todos }: ScheduleCardProps) => {
  return (
    <View
      style={{
        backgroundColor: "#2A2C45",
        borderRadius: 15,
        paddingVertical: 10,
        paddingLeft: 25,
        paddingRight: 17,
        overflow: "hidden",
        justifyContent: "center",
        alignItems: "flex-start",
        gap: 5,
        flexShrink: 0,
        width: "100%",
      }}
    >
      {/* 왼쪽 컬러 라인 */}
      <View
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          bottom: 0,
          width: 15,
          flexShrink: 0,
          alignSelf: "stretch",
          backgroundColor: "#C11BEF",
          borderTopLeftRadius: 15,
          borderBottomLeftRadius: 15,
        }}
      />

      {/* 일정명 / 시간 */}
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View>
          <Text
            style={{
              color: "white",
              fontSize: 14.557,
              fontWeight: "600",
              lineHeight: 18.9241,
            }}
          >
            {title}
          </Text>
          <Text
            style={{
              color: "white",
              fontSize: 12.131,
              fontWeight: "500",
              lineHeight: 18.9241,
            }}
          >
            {time}
          </Text>
        </View>

        <TouchableOpacity>
          <Ionicons
            name="ellipsis-vertical"
            size={25}
            color="#3F4360"
            style={{ marginRight: -2 }}
          />
        </TouchableOpacity>
      </View>

      {todos.map((value, index) => (
        <ScheduleCardTodo key={index} todo={value} />
      ))}
    </View>
  );
};

export default ScheduleCard;
