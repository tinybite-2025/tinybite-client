import ScheduleCard from "@/components/ScheduleCard";
import { StyleSheet, View } from "react-native";

export default function HomeScreen() {
  const todos = [
    { id: 0, text: "동역사 스타벅스 가기", done: false },
    { id: 1, text: "노트북 환경 설정", done: true },
  ];
  return (
    <View style={styles.container}>
      <ScheduleCard id={0} title="FE 회의" time="16:00 - 18:00" todos={todos} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#10121F",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
});
