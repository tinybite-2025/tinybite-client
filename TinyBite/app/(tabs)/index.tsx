import MainCard from "@/components/mainCard";
import MainCategory from "@/components/mainCategory";
import MainHeader from "@/components/mainHeader";
import { useRouter } from "expo-router";

import { ScrollView, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safeArea} edges={["top"]}>
      <View style={styles.container}>
        <MainHeader />
        <MainCategory />
        <ScrollView
          style={styles.scroll}
          contentContainerStyle={styles.listWrapper}
        >
          <View style={styles.cardWrapper}>
            <MainCard />
            <MainCard />
            <MainCard />
            <MainCard />
            <MainCard />
            <MainCard onPress={() => router.push("/detail" as const)} />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#FE870F",
  },
  container: {
    flex: 1,
    backgroundColor: "#FCFBFF",
  },
  scroll: {
    marginTop: 18,
    backgroundColor: "#FCFBFF",
  },
  listWrapper: {
    marginTop: 4,
    alignItems: "center",
  },
  cardWrapper: {
    gap: 16,
    marginBottom: 16,
  },
});
