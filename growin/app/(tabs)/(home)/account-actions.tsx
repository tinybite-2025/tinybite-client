// 마이페이지 > 계정 설정 화면 - 로그아웃 및 회원 탈퇴 등 계정 관련 기능 안내
import PageHeader from "@/components/common/PageHeader";
import ProfileHeader from "@/components/mypage/ProfileHeader";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

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
          <PageHeader
            title="로그아웃 및 회원 탈퇴"
          />

          {/* 프로필 영역 */}
          <ProfileHeader />

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
