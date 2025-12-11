import MainCategory from "@/components/mainCategory";
import MainHeader from "@/components/mainHeader";
import MainList from "@/components/mainList";
import { useRouter } from "expo-router";
import { ScrollView, StyleSheet, View } from "react-native";

export default function HomeScreen() {
  const router = useRouter();

  return (
    <ScrollView style={styles.scroll} contentContainerStyle={styles.screen}>
      <MainHeader />
      <MainCategory />
      <View style={styles.listWrapper}>
        <MainList onPress={() => router.push("/detail" as const)} />
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
    gap: 8,
  },
  listWrapper: {
    marginTop: 4,
    gap: 16,
    alignItems: "center",
  },
});
