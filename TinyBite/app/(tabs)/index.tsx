import MainHeader from "@/components/mainHeader";
import MainList from "@/components/mainList";
import { ScrollView, StyleSheet, View } from "react-native";

export default function HomeScreen() {
  return (
    <ScrollView style={styles.scroll} contentContainerStyle={styles.screen}>
      <MainHeader />
      <View style={styles.listWrapper}>
        <MainList />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
    backgroundColor: "#FCFBFF",
  },
  screen: {
    alignItems: "center",
  },
  listWrapper: {
    marginTop: 8,
  },
});

