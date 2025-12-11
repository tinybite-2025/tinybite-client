import { useRouter } from "expo-router";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Detail = () => {
  const router = useRouter();

  return (
    <View style={styles.safeWrapper}>
      <ScrollView style={styles.scroll} contentContainerStyle={styles.content}>
        <View style={styles.heroWrapper}>
          <Image
            source={require("@/assets/images/mainlist/food1.jpg")}
            style={styles.hero}
            resizeMode="cover"
          />
          <TouchableOpacity onPress={() => router.back()} style={styles.back}>
            <Text style={styles.backText}>‹</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.card}>
          <Text style={styles.title}>후문 엽떡 나누실 분 ㅃㄹ</Text>

          <View style={styles.pillsRow}>
            <View style={styles.pillGray}>
              <Image source={require("@/assets/images/main/category/delivery.png")} style={styles.pillIcon} resizeMode="contain" />
              <Text style={styles.pillGrayText}>배달</Text>
            </View>
            <View style={styles.pillGray}>
              <Text style={styles.pillGrayText}>10분전</Text>
            </View>
          </View>

          <View style={styles.rowBetween}>
            <View style={styles.hostRow}>
              <View style={styles.hostAvatar}>
                <Image source={require("@/assets/images/mainlist/detail/profile-character.png")} style={styles.hostAvatarImage} resizeMode="contain" />
              </View>
              <View>
                <Text style={styles.hostName}>엽떡조아</Text>
                <View style={styles.hostMetaRow}>
                  <Image source={require("@/assets/images/mainlist/detail/location-icon.png")} style={styles.hostMetaIcon} resizeMode="contain" />
                  <Text style={styles.hostMeta}>서울시 강남구 역삼동</Text>
                </View>
              </View>
            </View>
          </View>

          <View style={styles.divider} />

          <View style={styles.infoRow}>
            <View style={styles.infoIconWrap}>
              <Image source={require("@/assets/images/mainlist/detail/location-icon2.png")} style={styles.infoIcon} resizeMode="contain" />
            </View>
            <View style={styles.infoBlock}>
              <Text style={styles.infoTitle}>역삼 래미안 앞</Text>
              <Text style={styles.infoMeta}>내 위치에서 150M</Text>
            </View>
          </View>

          <View style={styles.infoRow}>
            <View style={styles.infoIconWrap}>
              <Image source={require("@/assets/images/mainlist/detail/group-icon.png")} style={styles.infoIcon} resizeMode="contain" />
            </View>
            <View style={styles.infoBlock}>
              <Text style={styles.infoTitle}>2/4명 모집 중</Text>
              <Text style={styles.infoMeta}>2명 남았어요!</Text>
            </View>
          </View>

          <View style={styles.infoRow}>
            <View style={styles.infoIconWrap}>
              <Image source={require("@/assets/images/mainlist/detail/money-icon.png")} style={styles.infoIcon} resizeMode="contain" />
            </View>
            <View style={styles.infoBlock}>
              <Text style={styles.infoTitle}>1인당 5,000원</Text>
              <Text style={styles.infoMeta}>총 20,000원</Text>
            </View>
          </View>

          <View style={styles.noteBox}>
            <Text style={styles.noteTitle}>호스트의 한마디</Text>
            <Text style={styles.noteBody}>
              배달 팁 나누실 분 구해요! 엽떡 매운맛 시킬 예정입니다. 쿨피스는 제가 쏠게요.
            </Text>
          </View>
        </View>
      </ScrollView>

      <View style={styles.ctaContainer}>
        <TouchableOpacity style={styles.cta}>
          <Text style={styles.ctaText}>5,000원으로 참여하기</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Detail;

const styles = StyleSheet.create({
  safeWrapper: {
    flex: 1,
    backgroundColor: "#FCFBFF",
  },
  scroll: {
    flex: 1,
    backgroundColor: "#FCFBFF",
  },
  content: {
    paddingBottom: 140,
    backgroundColor: "#FCFBFF",
  },
  heroWrapper: {
    position: "relative",
    alignItems: "center",
  },
  hero: {
    width: 402,
    height: 300,
  },
  back: {
    position: "absolute",
    top: 48,
    left: 16,
    width: 44,
    height: 44,
    borderRadius: 22,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  backText: {
    fontSize: 20,
    fontWeight: "700",
    color: "#FFFFFF",
  },
  card: {
    marginTop: -24,
    width: "100%",
    height: "100%",
    marginVertical: 12,
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    paddingHorizontal: 20,
    paddingTop: 28,
    paddingBottom: 20,
    shadowColor: "#000000",
    shadowOpacity: 0.25,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 4 },
    elevation: 4,
  },
  title: {
    fontSize: 20,
    lineHeight: 27,
    fontWeight: "700",
    color: "#000000",
    marginBottom: 16,
  },
  pillsRow: {
    flexDirection: "row",
    gap: 8,
    marginBottom: 20,
  },
  pillGray: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    backgroundColor: "#F4F4F4",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 16,
  },
  pillGrayText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#8D8D8D",
  },
  pillIcon: {
    width: 20,
    height: 20,
  },
  rowBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  hostRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  hostAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#FE870F",
    alignItems: "center",
    justifyContent: "center",
    padding: 1,
    overflow: "hidden",
    shadowColor: "#000000",
    shadowOpacity: 0.25,
    shadowRadius: 2,
    shadowOffset: { width: 0, height: 0},
    elevation: 2,
  },
  hostAvatarImage: {
    width: 36,
    height: 45,
    transform: [{ translateY: 3 }],
  },
  hostName: {
    fontSize: 15,
    lineHeight: 20.25,
    fontWeight: "600",
    color: "#000000",
    fontFamily: "Pretendard",
  },
  hostMetaRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  hostMetaIcon: {
    padding: 1,
    width: 18,
    height: 18,
  },
  hostMeta: {
    fontSize: 13,
    lineHeight: 17.55,
    fontWeight: "600",
    color: "#8D8D8D",
    fontFamily: "Pretendard",
  },
  divider: {
    alignSelf: "center",
    width: 362,
    height: 4,
    backgroundColor: "#E5E5E5",
    borderRadius: 2,
    marginBottom: 19,
  },
  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    marginBottom: 12,
  },
  infoBlock: {
    flex: 1,
    marginBottom: 0,
  },
  infoTitle: {
    fontSize: 16,
    lineHeight: 21.6,
    fontWeight: "600",
    color: "#000000",
    fontFamily: "Pretendard",
  },
  infoIconWrap: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "#FFEFD8",
    paddingHorizontal: 3,
    paddingVertical: 4,
    alignItems: "center",
    justifyContent: "center",
  },
  infoIcon: {
    width: 32,
    height: 32,
  },
  infoMeta: {
    fontSize: 12,
    lineHeight: 16.2,
    fontWeight: "500",
    color: "#8D8D8D",
    fontFamily: "Pretendard",
  },
  noteBox: {
    marginTop: 12,
    alignSelf: "center",
    width: 362,
    height: 90,
    backgroundColor: "#FCFBFF",
    borderRadius: 16,
    paddingHorizontal: 12,
    paddingVertical: 12,
    shadowColor: "#000000",
    shadowOpacity: 0.25,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 4 },
    elevation: 4,
  },
  noteTitle: {
    fontSize: 14,
    fontWeight: "700",
    marginBottom: 6,
  },
  noteBody: {
    fontSize: 14,
    color: "#555",
  },
  ctaContainer: {
    position: "absolute",
    bottom: 0,
    alignSelf: "center",
    width: 402,
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
    width: 362,
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
    paddingTop: 16,
    paddingBottom: 16,
  },
});
