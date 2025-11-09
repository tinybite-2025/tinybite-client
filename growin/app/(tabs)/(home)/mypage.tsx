// 마이페이지 화면 - 사용자 프로필과 설정, 메뉴 항목을 보여주는 화면
import PageHeader from "@/components/common/PageHeader";
import ProfileHeader from "@/components/mypage/ProfileHeader";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";

// 마이페이지 설정 항목 리스트
const MY_PAGE_SETTINGS_LIST = [
  { label: "내 정보 변경", onPress: () => {} },
  {
    label: "로그아웃 및 회원 탈퇴",
    onPress: (router: ReturnType<typeof useRouter>) => {
      router.push("/(tabs)/(home)/account-actions");
    },
  },
];

export default function MyPageScreen() {
  const router = useRouter();
  const [isPushNotificationEnabled, setIsPushNotificationEnabled] = useState(true);

  // 푸시 알람 설정 토글 핸들러
  const handleTogglePushNotification = (value: boolean) => {
    setIsPushNotificationEnabled(value);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.wrapper}>
          {/* 헤더 영역 */}
          <PageHeader title="마이페이지" />

          {/* 프로필 영역 */}
          <ProfileHeader />

          <View style={styles.profileDivider} />

          {/* 푸시 알람 설정 토글 */}
          <View style={[styles.sectionRow, styles.sectionRowCompact]}>
            <Text style={styles.sectionLabel}>푸시 알람 설정</Text>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => handleTogglePushNotification(!isPushNotificationEnabled)}
            >
              <View
                style={[
                  styles.toggleTrack,
                  isPushNotificationEnabled && styles.toggleTrackActive,
                ]}
              >
                <View
                  style={[
                    styles.toggleThumb,
                    isPushNotificationEnabled && styles.toggleThumbActive,
                  ]}
                />
              </View>
            </TouchableOpacity>
          </View>

          {/* 설정 리스트 */}
          {MY_PAGE_SETTINGS_LIST.map((settingsItem) => (
            <TouchableOpacity
              key={settingsItem.label}
              style={styles.settingsRow}
              activeOpacity={0.7}
              onPress={() => settingsItem.onPress(router)}
            >
              <Text style={styles.settingsLabel}>{settingsItem.label}</Text>
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
  sectionRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 16,
  },
  sectionLabel: {
    flex: 1,
    fontSize: 18,
    lineHeight: 23.4,
    fontFamily: "Pretendard",
    fontWeight: "600",
    color: "#FFFFFF",
  },
  sectionRowCompact: {
    marginTop: -4,
  },
  toggleTrack: {
    width: 56,
    height: 30,
    borderRadius: 100,
    backgroundColor: "#8E8E93",
    padding: 4,
    justifyContent: "center",
  },
  toggleTrackActive: {
    backgroundColor: "#FF008B",
  },
  toggleThumb: {
    width: 22,
    height: 22,
    borderRadius: 11,
    backgroundColor: "#FFFFFF",
  },
  toggleThumbActive: {
    alignSelf: "flex-end",
  },
  settingsRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 20,
    borderTopWidth: 1,
    borderTopColor: "rgba(255, 255, 255, 0.05)",
  },
  settingsLabel: {
    flex: 1,
    fontSize: 18,
    lineHeight: 23.4,
    fontFamily: "Pretendard",
    fontWeight: "600",
    color: "#FFFFFF",
  },
});
