import LocationSearchResult from "@/components/location-settings/LocationSearchResult";
import PaginationIndecatorHeader from "@/components/PaginationIndecatorHeader";
import { useRouter } from "expo-router";
import { useCallback, useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function RegionScreen() {
  const router = useRouter();
  const [text, setText] = useState("");
  const [verified, setVerified] = useState(false);

  const handleTextChange = useCallback((text: string) => {
    setText(text);
    setVerified(true);
  }, []);

  const handleFindLocationClick = () => {
    console.log("위치 찾기 버튼 클릭");
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.inner}>
        {/* 헤더 */}
        <PaginationIndecatorHeader page={3} />

        <View style={{ marginBottom: 10 }}>
          {/* 동네 설정 */}
          <Text
            style={styles.title}
          >{`내 동네를 설정하고 \n근처 이웃과 딱 필요한 만큼 나눠요!`}</Text>

          <View style={styles.inputContainer}>
            <Image
              source={require("@/assets/images/location.png")}
              style={{ width: 24, height: 24, aspectRatio: 1 / 1 }}
            />
            <TextInput
              style={styles.input}
              onChangeText={handleTextChange}
              value={text}
              placeholder="동명(읍,면)으로 검색 (ex.역삼동)"
              placeholderTextColor="#888"
              keyboardType="default"
              maxLength={8}
            />
          </View>

          <TouchableOpacity
            style={styles.findBtn}
            onPress={handleFindLocationClick}
          >
            <Image
              source={require("@/assets/images/location-tracking.png")}
              style={{ width: 24, height: 24, aspectRatio: 1 / 1 }}
            />
            <Text style={styles.findText}>현재 위치로 주소 찾기</Text>
          </TouchableOpacity>
        </View>

        <LocationSearchResult />
      </ScrollView>

      {/* 다음 버튼 */}
      <TouchableOpacity
        style={[styles.nextBtn, !verified && styles.disabled]}
        disabled={!verified}
        onPress={() => router.push("/signup/complete")}
      >
        <Text style={styles.nextText}>다음</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FCFBFF" },
  inner: { paddingHorizontal: 20 },

  title: {
    fontSize: 24,
    fontWeight: "600",
    lineHeight: 32.4,
    marginBottom: 28,
    color: "#FE870F",
  },

  inputContainer: {
    flexDirection: "row",
    gap: 4,
    padding: 12,
    marginBottom: 12,
    backgroundColor: "#fff",
    borderRadius: 16,
    borderWidth: 0,
    // 그림자 효과 (iOS)
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    // 그림자 효과 (Android)
    elevation: 3,
  },
  input: {
    flex: 1,
    alignSelf: "stretch",
    fontSize: 18,
    fontWeight: "600",
    lineHeight: 24.3,
    color: "#000",
    padding: 0,
    margin: 0,
  },
  findBtn: {
    flexDirection: "row",
    paddingVertical: 10,
    justifyContent: "center",
    alignItems: "center",
    gap: 4,
    borderRadius: 16,
    backgroundColor: "#FE870F",
  },
  findText: {
    color: "#ffffff",
    fontSize: 15,
    fontWeight: 600,
    lineHeight: 20.25,
  },

  nextBtn: {
    marginHorizontal: 20,
    backgroundColor: "#FE870F",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 16,
    borderRadius: 16,
  },
  nextText: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: 600,
    lineHeight: 24.3,
  },
  disabled: { opacity: 0.3 },
});
