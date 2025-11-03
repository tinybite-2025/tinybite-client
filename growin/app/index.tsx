import { StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>홈</Text>
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
