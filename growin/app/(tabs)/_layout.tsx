import { Tabs } from "expo-router";
import { Image, Text } from "react-native";


export default function Layout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: true,
        tabBarStyle: {
          backgroundColor: "#2A2C45",
          height: 92,
          borderTopWidth: 0,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 0 },
          shadowOpacity: 0.25,
          shadowRadius: 12, // iOS 그림자
          elevation: 12, // Android 그림자
        },
        tabBarLabelPosition: "below-icon",
        tabBarIconStyle: { marginTop: 7, marginBottom: 5 },
        tabBarIcon: ({ focused }) => {
          let icon;

          if (route.name === "(home)") {
            icon = focused
              ? require("@/assets/images/gnb/gnb-home-selected.png")
              : require("@/assets/images/gnb/gnb-home.png");
          } else if (route.name === "activity") {
            icon = focused
              ? require("@/assets/images/gnb/gnb-activity-selected.png")
              : require("@/assets/images/gnb/gnb-activity.png");
          } else if (route.name === "record") {
            icon = focused
              ? require("@/assets/images/gnb/gnb-record-selected.png")
              : require("@/assets/images/gnb/gnb-record.png");  
          }

          return (
            <Image
              source={icon}
              style={{
                width: 20,
                height: 20,
                resizeMode: "contain",
              }}
            />
          );
        },
        tabBarLabel: ({ focused }) => {
          let label = "";
          if (route.name === "(home)") label = "홈";
          else if (route.name === "activity") label = "활동";
          else if (route.name === "record") label = "기록";

          return (
            <Text
              style={{
                fontSize: 13,
                fontWeight: "600",
                color: focused ? "#FF008B" : "#8E8E93",
                marginBottom: 4,
              }}
            >
              {label}
            </Text>
          );
        },
      })}
    >
      <Tabs.Screen name="(home)" options={{ title: "홈" }} />
      <Tabs.Screen name="activity" options={{ title: "활동" }} />
      <Tabs.Screen name="record" options={{ title: "기록" }} />
    </Tabs>
  );
}
