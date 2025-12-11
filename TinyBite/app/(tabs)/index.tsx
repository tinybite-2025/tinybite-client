import MainCard from "@/components/mainCard";
import MainCategory from "@/components/mainCategory";
import MainHeader from "@/components/mainHeader";
import { ScrollView, StyleSheet, View } from "react-native";
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";

export default function HomeScreen() {
  const insets = useSafeAreaInsets();
  
  return (
    <View style={styles.wrapper}>
      <SafeAreaView style={styles.safeAreaTop} edges={["top"]}>
        <View style={styles.container}>
          <MainHeader />
          <MainCategory />
          <ScrollView 
            style={styles.scroll}
            contentContainerStyle={[styles.listWrapper]}
          ><View style={styles.cardWrapper}>
            <MainCard />
            <MainCard />
            <MainCard />
            <MainCard />
            <MainCard />
            <MainCard />
          </View>
           
          </ScrollView>
        </View>
      </SafeAreaView>
      <View style={[styles.safeAreaBottom, { paddingBottom: Math.max(insets.bottom * 0.01) }]}>
        <View style={styles.bottomArea} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  safeAreaTop: {
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
  safeAreaBottom: {
    backgroundColor: "#FCFBFF",
  },
  bottomArea: {
    height: 1,
    backgroundColor: "#FCFBFF",
  },
});

