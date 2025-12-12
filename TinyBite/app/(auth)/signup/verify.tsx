import PaginationIndecatorHeader from "@/components/PaginationIndecatorHeader";
import { useRouter } from "expo-router";
import { useCallback, useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
const CHECKBOX_ON_IMAGE = require("../../../assets/images/verify-number/verify-number-on.png");
const CHECKBOX_OFF_IMAGE = require("../../../assets/images/verify-number/verify-number-off.png");

export default function VerifyScreen() {
  const router = useRouter();
  const [code, setCode] = useState("");
  const [verified, setVerified] = useState(false);

  const handleCodeChange = useCallback((text: string) => {
    const rawNumber = text.replace(/[^0-9]/g, "");
    setCode(rawNumber);

    if (rawNumber.length === 5) {
      console.log("5자리 입력 완료된 값:", rawNumber);
      setVerified(true);
    } else {
      setVerified(false);
    }
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inner}>
        {/* 헤더 */}
        <View style={{ marginBottom: 24 }}>
          <PaginationIndecatorHeader page={1} />
        </View>

        {/* 인증 번호 입력 */}
        <Text style={styles.title}>{`인증 번호를 \n입력해 주세요.`}</Text>
        <View style={styles.verifyContainer}>
          <View style={styles.inputContainer}>
            <TextInput
              value={code}
              onChangeText={handleCodeChange}
              placeholder="00000"
              placeholderTextColor="#888"
              keyboardType="numeric"
              style={styles.input}
              maxLength={5}
              autoFocus={true}
            />
            <Image
              source={verified ? CHECKBOX_ON_IMAGE : CHECKBOX_OFF_IMAGE}
              style={styles.inputCheckbox}
            />
          </View>
          <TouchableOpacity>
            <View style={styles.resend}>
              <Text style={styles.resendText}>재발송</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.timerContainer}>
          <Text style={styles.timer}>남은 시간 3:00</Text>
        </View>

        {/* 다음 버튼 */}
        <TouchableOpacity
          style={[styles.nextBtn, !verified && styles.disabled]}
          disabled={!verified}
          onPress={() => router.push("/signup/nickname")}
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
  verifyContainer: {
    flexDirection: "row",
    gap: 12,
    marginBottom: 8,
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    gap: 4,
    padding: 12,
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 16,
    backgroundColor: "#ffffff",
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
    fontSize: 18,
    fontWeight: 600,
    lineHeight: 24.3,
    padding: 0,
    margin: 0,
  },
  inputCheckbox: {
    width: 28,
    height: 28,
    aspectRatio: 1 / 1,
  },
  resend: {
    flex: 1,
    backgroundColor: "#FFEFD8",
    padding: 12,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 16,
  },
  resendText: {
    color: "#FE870F",
    fontSize: 18,
    fontWeight: 600,
    lineHeight: 24.3,
  },

  timerContainer: {
    flexDirection: "row",
  },
  timer: { color: "#888", fontSize: 15, fontWeight: 600, lineHeight: 20.25 },

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
