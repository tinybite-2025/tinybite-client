import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

export default function ScheduleCard() {
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
            잇타 회의
          </Text>
          <Text
            style={{
              color: "white",
              fontSize: 12.131,
              fontWeight: "500",
              lineHeight: 18.9241,
            }}
          >
            12:00 - 13:00
          </Text>
        </View>

        <TouchableOpacity>
          <Ionicons name="ellipsis-vertical" size={25} color="#3F4360" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
