import { useRouter } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function LoginScreen() {
  const router = useRouter();

  const handleLoginPress = (provider: string) => {
    console.log("소셜 로그인:", provider);

    // TODO: 소셜 로그인 로직 추가
    // 임시 로직: 기존 회원 여부 판단
    const isExistingUser = false; // 백엔드 응답 기준으로 변경

    if (isExistingUser) {
      router.replace("/(tabs)");
    } else {
      router.push("/signup/terms");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inner}>
        <View style={styles.logoBox}>
          <Image
            source={require("../../../assets/images/splash.png")}
            resizeMode="contain"
          />
        </View>

        <View style={styles.buttons}>
          <TouchableOpacity
            style={[styles.socialButton, styles.kakao]}
            onPress={() => handleLoginPress("kakao")}
          >
            <Image
              source={require("../../../assets/images/login/icon-kakao.png")}
              resizeMode="contain"
            />
            <Text style={styles.socialText}>카카오로 시작하기</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.socialButton, styles.google]}
            onPress={() => handleLoginPress("google")}
          >
            <Image
              source={require("../../../assets/images/login/icon-google.png")}
              resizeMode="contain"
            />
            <Text style={styles.socialText}>Google로 시작하기</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.socialButton, styles.apple]}
            onPress={() => handleLoginPress("apple")}
          >
            <Image
              source={require("../../../assets/images/login/icon-apple.png")}
              resizeMode="contain"
            />
            <Text style={styles.socialText}>Apple로 시작하기</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FF7A00" },
  inner: { flex: 1, paddingHorizontal: 20, justifyContent: "center" },

  logoBox: { alignItems: "center", marginTop: 139, marginBottom: 120 },

  buttons: { gap: 16 },

  socialButton: {
    flexDirection: "row",
    gap: 8,
    paddingVertical: 16,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  kakao: { backgroundColor: "#FEE500" },
  google: { backgroundColor: "#FFFFFF" },
  apple: { backgroundColor: "#FFFFFF" },
  socialText: {
    fontSize: 18,
    fontStyle: "normal",
    fontWeight: 600,
    lineHeight: 24.3,
  },
});
