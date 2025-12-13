import MainCardDetailHost from "@/components/main-card-detail/MainCardDetailHost";
import MainCardDetailHostNote from "@/components/main-card-detail/MainCardDetailHostNote";
import MainCardDetailInfo from "@/components/main-card-detail/MainCardDetailInfo";
import MainCardDetailProductLink from "@/components/main-card-detail/MainCardDetailProductLink";
import { useRouter } from "expo-router";
import React, { useRef } from "react";
import {
  Animated,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const MainCardDetail = () => {
  const router = useRouter();
  const scrollY = useRef(new Animated.Value(0)).current;

  const cardTranslateY = scrollY.interpolate({
    inputRange: [0, 200],
    outputRange: [0, 70],
    extrapolate: "clamp",
  });

  return (
    <View style={{ flex: 1, position: "relative" }}>
      <Image
        style={styles.heroImage}
        source={require("@/assets/images/mainlist/food1.jpg")}
        resizeMode="cover"
      />
      <SafeAreaView style={styles.safeArea} edges={["top"]}>
        <View style={styles.page}>
          <TouchableOpacity
            onPress={() => router.back()}
            style={styles.backButton}
          >
            <Text style={styles.backButtonText}>‹ </Text>
          </TouchableOpacity>

          <Animated.ScrollView
            style={styles.contentScroll}
            contentContainerStyle={styles.contentContainer}
            bounces={false}
            alwaysBounceVertical={false}
            overScrollMode="never"
            decelerationRate="fast"
            scrollEventThrottle={16}
            onScroll={Animated.event(
              [{ nativeEvent: { contentOffset: { y: scrollY } } }],
              { useNativeDriver: true }
            )}
          >
            <Animated.View
              style={[
                styles.detailCard,
                { transform: [{ translateY: cardTranslateY }] },
              ]}
            >
              <Text style={styles.title}>후문 엽떡 나누실 분 ㅃㄹ</Text>

              <View style={styles.pillsRow}>
                <View style={styles.pill}>
                  <Image
                    source={require("@/assets/images/main/category/delivery.png")}
                    style={styles.pillIcon}
                    resizeMode="contain"
                  />
                  <Text style={styles.pillText}>배달</Text>
                </View>
                <View style={styles.pill}>
                  <Text style={styles.pillText}>10분전</Text>
                </View>
              </View>

              <MainCardDetailHost
                avatar={require("@/assets/images/mainlist/detail/profile-character.png")}
                name="엽떡조아"
                location="서울시 강남구 역삼동"
              />

              <View style={styles.divider} />

              <MainCardDetailInfo
                items={[
                  {
                    type: "location",
                    title: "역삼 래미안 앞",
                    meta: "내 위치에서 150M",
                  },
                  {
                    type: "group",
                    title: "2/4명 모집 중",
                    meta: "2명 남았어요!",
                  },
                  {
                    type: "money",
                    title: "1인당 5,000원",
                    meta: "총 20,000원",
                  },
                ]}
              />

              <MainCardDetailProductLink
                headerLabel="구매 예정 상품"
                productTitle="코스트코 베이글 & 크림치즈"
                productUrl="https://www.costco.co.kr/"
              />

              <MainCardDetailHostNote body="배달 팁 나누실 분 구해요! 엽떡 매운맛 시킬 예정입니다. 쿨피스는 제가 쏠게요." />
            </Animated.View>
          </Animated.ScrollView>

          <View style={styles.ctaContainer}>
            <TouchableOpacity style={styles.cta}>
              <Text style={styles.ctaText}>5,000원으로 참여하기</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default MainCardDetail;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  page: {
    flex: 1,
    fontFamily: "Pretendard",
    position: "relative",
  },
  contentScroll: {
    flex: 1,
  },
  contentContainer: {
    paddingTop: 180,
    paddingBottom: 180,
    minHeight: "120%",
  },
  heroImage: {
    position: "absolute",
    backgroundColor: "#000000",
    top: 0,
    left: 0,
    right: 0,
    height: 300,
    width: "100%",
  },
  backButton: {
    position: "absolute",
    top: 8,
    left: 16,
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.3)",
    zIndex: 3,
  },
  backButtonText: {
    fontSize: 24,
    fontWeight: "700",
    color: "#FFFFFF",
    fontFamily: "Pretendard",
  },
  detailCard: {
    position: "relative",
    zIndex: 2,
    width: "100%",
    marginBottom: 12,
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    paddingHorizontal: 20,
    paddingTop: 28,
    paddingBottom: 20,
  },
  title: {
    fontSize: 20,
    lineHeight: 27,
    fontWeight: "700",
    color: "#000000",
    marginBottom: 16,
    fontFamily: "Pretendard",
  },
  pillsRow: {
    flexDirection: "row",
    gap: 8,
    marginBottom: 20,
  },
  pill: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    backgroundColor: "#F4F4F4",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 16,
  },
  pillText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#8D8D8D",
    fontFamily: "Pretendard",
  },
  pillIcon: {
    width: 20,
    height: 20,
  },
  divider: {
    alignSelf: "stretch",
    width: "100%",
    height: 4,
    backgroundColor: "#E5E5E5",
    borderRadius: 2,
    marginBottom: 19,
  },
  ctaContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 120,
    paddingHorizontal: 20,
    paddingTop: 12,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000000",
    shadowOpacity: 0.15,
    shadowRadius: 2,
    shadowOffset: { width: 0, height: -4 },
    elevation: 4,
  },
  cta: {
    width: "100%",
    height: 56,
    borderRadius: 16,
    backgroundColor: "#FF8900",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 42,
  },
  ctaText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "800",
    fontFamily: "Pretendard",
  },
});
