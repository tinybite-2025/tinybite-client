// 마이페이지 > 계정 설정 화면 - 로그아웃 및 회원 탈퇴 등 계정 관련 기능 안내
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import {
    Image,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

const PROFILE_METADATA_LIST = [
  { label: "관심 분야", value: "IT" },
  { label: "나의 목표", value: "취직 · 이직" },
];

const ACCOUNT_ACTIONS = [
  { label: "로그아웃", onPress: () => {} },
  { label: "회원 탈퇴", onPress: () => {} },
];

export default function MyPageAccountScreen() {
  const router = useRouter();

  const handlePressBack = () => {
    router.back();
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.wrapper}>
          {/* 헤더 */}
          <View style={styles.header}>
            <TouchableOpacity
              style={styles.headerBackButton}
              onPress={handlePressBack}
              activeOpacity={0.8}
            >
              <Ionicons name="chevron-back" size={24} color="#FFFFFF" />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>로그아웃 및 회원 탈퇴</Text>
            <View style={styles.headerRightPlaceholder} />
          </View>

          {/* 프로필 영역과 메타 정보 */}
          <View style={styles.profileSection}>
            <Image
              source={require("@/assets/images/logo/growin-logo-home-small.png")}
              style={styles.profileImage}
              resizeMode="contain"
            />
            <View style={styles.profileInfo}>
              <Text style={styles.profileName}>랜덤닉네임123</Text>
              <View style={styles.profileMetaContainer}>
                {PROFILE_METADATA_LIST.map((metadataItem) => (
                  <View key={metadataItem.label} style={styles.profileMetaItem}>
                    <Text style={styles.profileMetaLabel}>{metadataItem.label}</Text>
                    <Text style={styles.profileMetaValue}>{metadataItem.value}</Text>
                  </View>
                ))}
              </View>
            </View>
          </View>

          <View style={styles.profileDivider} />

          {/* 계정 관련 액션 */}
          {ACCOUNT_ACTIONS.map((action, index) => (
            <TouchableOpacity
              key={action.label}
              style={[
                styles.actionRow,
                index === 0 && styles.actionRowFirst,
              ]}
              activeOpacity={0.7}
              onPress={action.onPress}
            >
              <Text style={styles.actionLabel}>{action.label}</Text>
              <Ionicons name="chevron-forward" size={20} color="#FFFFFF" />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#10121F",
  },
  scrollContainer: {
    alignItems: "center",
    paddingBottom: 40,
  },
  wrapper: {
    width: "100%",
    maxWidth: 390,
    paddingHorizontal: 20,
    paddingVertical: 24,
    backgroundColor: "#10121F",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerBackButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  headerTitle: {
    fontSize: 20,
    lineHeight: 26,
    fontFamily: "Pretendard",
    fontWeight: "700",
    color: "#FFFFFF",
  },
  headerRightPlaceholder: {
    width: 32,
    height: 32,
  },
  profileSection: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 23,
  },
  profileImage: {
    width: 46.5,
    height: 34.5,
  },
  profileInfo: {
    marginLeft: 16,
    flex: 1,
  },
  profileName: {
    fontSize: 18,
    lineHeight: 23.4,
    fontFamily: "Pretendard",
    fontWeight: "600",
    color: "#FFFFFF",
  },
  profileMetaContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 16,
    marginTop: 5,
  },
  profileMetaItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  profileMetaLabel: {
    fontSize: 14,
    color: "#8E8E93",
    fontFamily: "Pretendard",
    fontWeight: "500",
  },
  profileMetaValue: {
    fontSize: 14,
    color: "#FFFFFF",
    fontFamily: "Pretendard",
    fontWeight: "500",
  },
  profileDivider: {
    width: 350,
    height: 4,
    marginTop: 20,
    marginBottom: 17,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderRadius: 2,
    alignSelf: "center",
  },
  actionRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 20,
    borderTopWidth: 1,
    borderTopColor: "rgba(255, 255, 255, 0.05)",
  },
  actionRowFirst: {
    borderTopWidth: 0,
  },
  actionLabel: {
    flex: 1,
    fontSize: 18,
    lineHeight: 23.4,
    fontFamily: "Pretendard",
    fontWeight: "600",
    color: "#FFFFFF",
  },
});
