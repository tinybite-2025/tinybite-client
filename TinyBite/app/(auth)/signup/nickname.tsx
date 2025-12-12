import PaginationIndecatorHeader from "@/components/PaginationIndecatorHeader";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useCallback, useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function NicknameScreen() {
  const router = useRouter();
  const [nickname, setNickname] = useState("");
  const [verified, setVerified] = useState(false);

  const handleTextChange = useCallback((text: string) => {
    setNickname(text);

    if (text.length >= 2) {
      setVerified(true);
    } else {
      setVerified(false);
    }
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />

      <View style={styles.inner}>
        {/* 헤더 */}
        <View style={{ marginBottom: 24 }}>
          <PaginationIndecatorHeader page={2} />
        </View>

        {/* 닉네임 입력 */}
        <Text style={styles.title}>{`사용하실 닉네임을 \n입력해 주세요.`}</Text>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>닉네임</Text>
          <View style={{ alignSelf: "stretch" }}>
            <TextInput
              style={styles.input}
              onChangeText={handleTextChange}
              value={nickname}
              placeholder="닉네임 (2~12자)"
              keyboardType="default"
              maxLength={12}
            />
            <Text style={styles.count}>({nickname.length}/12)</Text>
          </View>
        </View>

        <View style={styles.row}>
          <Text style={styles.status}>이미 사용 중인 닉네임입니다.</Text>
        </View>

        {/* 다음 버튼 */}
        <TouchableOpacity
          style={[styles.nextBtn, !verified && styles.disabled]}
          disabled={!verified}
          onPress={() => router.push("/signup/region")}
        >
          <Text style={styles.nextText}>다음</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingHorizontal: 20 },
  inner: { flex: 1, position: "relative" },

  title: {
    fontSize: 24,
    fontWeight: "600",
    lineHeight: 32.4,
    marginBottom: 28,
    color: "#FE870F",
  },

  inputContainer: {
    gap: 8,
    padding: 12,
    marginBottom: 8,
    justifyContent: "center",
    alignItems: "flex-start",
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
  label: {
    fontSize: 16,
    fontWeight: 600,
    lineHeight: 21.6,
    color: "#888",
  },
  input: {
    alignSelf: "stretch",
    fontSize: 18,
    fontWeight: "600",
    lineHeight: 24.3,
    color: "#000",
    padding: 0,
    margin: 0,
  },
  count: {
    fontSize: 12,
    fontWeight: 500,
    lineHeight: 16.2,
    color: "#aaa",
    textAlign: "right",
  },

  row: {
    flexDirection: "row",
  },
  status: { color: "#E93838", fontSize: 16, fontWeight: 500, lineHeight: 21.6 },

  nextBtn: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
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
