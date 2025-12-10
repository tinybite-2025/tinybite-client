import MainList from "@/components/mainList";
import { StyleSheet, View } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.screen}>
      <MainList />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#FCFBFF",
    justifyContent: "center",
    alignItems: "center",
  },
});

