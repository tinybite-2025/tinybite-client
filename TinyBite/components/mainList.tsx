import { Image, StyleSheet, Text, View } from "react-native";

export default function MainList() {
  return (
    <View style={styles.card}>
      <Image source={require("@/assets/mainlist/food1.jpg")} style={styles.thumbnail} />
      <View style={styles.cardBody}>
        <View>
          <Text style={styles.title}>후문 엽떡 나누실 분 ㅃㄹ</Text>
          <Text style={styles.price}>5,000원</Text>
        </View>
        <View style={styles.footerRow}>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>1/4명</Text>
          </View>
          <Text style={styles.meta}>10KM 이내 | 10분 전</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 362,
    height: 122,
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    paddingHorizontal: 12,
    paddingVertical: 16,
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    /* shadow */
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.15,
    shadowRadius: 3,
    elevation: 4,
  },
  thumbnail: {
    width: 90,
    height: 90,
    borderRadius: 16,
    backgroundColor: "#F2F2F2",
  },
  cardBody: {
    flex: 1,
    height: "100%",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "700",
    color: "#000000",
    fontFamily: "Pretendard",
  },
  price: {
    marginTop: 6,
    fontSize: 15,
    lineHeight: 20.25,
    fontWeight: "600",
    color: "#000000",
    fontFamily: "Pretendard",
  },
  footerRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  badge: {
    backgroundColor: "#FF8900",
    padding: 0.5,
    width: 51,
    height: 26,
    borderRadius: 100,
    paddingHorizontal: 10,
    paddingVertical: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  badgeText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "700",
  },
  meta: {
    fontSize: 13,
    lineHeight: 17.55,
    fontWeight: "600",
    color: "#8D8D8D",
    fontFamily: "Pretendard",
  },
});
