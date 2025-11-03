import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

const ScheduleCard = () => {
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
          <Ionicons
            name="ellipsis-vertical"
            size={25}
            color="#3F4360"
            style={{ marginRight: -2 }}
          />
        </TouchableOpacity>
      </View>

      {/* 일정 투두 */}
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
            color: "#fff",
            fontSize: 13,
            fontWeight: 500,
            lineHeight: 18.9241,
          }}
        >
          회의록 작성
        </Text>

        {/* 체크 비활성 */}
        <TouchableOpacity>
          <View
            style={{
              width: 20,
              height: 20,
              borderRadius: 10,
              borderWidth: 2,
              borderColor: "#3F4360",
            }}
          />
        </TouchableOpacity>
      </View>

      {/* 일정 투두 */}
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
            color: "#8E8E93",
            fontSize: 13,
            fontWeight: 500,
            lineHeight: 18.9241,
          }}
        >
          회의록 작성
        </Text>

        {/* 체크 활성 */}
        <TouchableOpacity>
          <View
            style={{
              width: 20,
              height: 20,
              flexShrink: 0,
              aspectRatio: 1 / 1,
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
                flexShrink: 0,
                aspectRatio: 1 / 1,
                borderRadius: 6,
                backgroundColor: "#FF008B",
              }}
            />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ScheduleCard;
