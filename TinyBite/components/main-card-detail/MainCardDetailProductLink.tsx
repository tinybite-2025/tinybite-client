import { Image, StyleSheet, Text, View } from "react-native";

interface MainCardDetailProductLinkProps {
  headerLabel: string;
  productTitle: string;
  productUrl: string;
}

const MainCardDetailProductLink = ({
  headerLabel,
  productTitle,
  productUrl,
}: MainCardDetailProductLinkProps) => {
  return (
    <View style={styles.linkSection}>
      <View style={styles.linkHeader}>
        <Image
          source={require("@/assets/images/mainlist/detail/host-link.png")}
          style={styles.linkIcon}
          resizeMode="contain"
        />
        <Text style={styles.linkLabel}>{headerLabel}</Text>
      </View>
      <View style={styles.linkContent}>
        <Image
          source={require("@/assets/images/mainlist/detail/link-photo.png")}
          style={styles.linkPhoto}
          resizeMode="cover"
        />
        <View style={styles.linkTexts}>
          <Text style={styles.linkTitle}>{productTitle}</Text>
          <Text style={styles.linkUrl}>{productUrl}</Text>
        </View>
      </View>
    </View>
  );
};

export default MainCardDetailProductLink;

const styles = StyleSheet.create({
  linkSection: {
    marginTop: 12,
    alignSelf: "center",
    width: "100%",
    backgroundColor: "#FCFBFF",
    borderRadius: 16,
    paddingHorizontal: 12,
    paddingVertical: 12,
    marginBottom: 16,
    shadowColor: "#000000",
    shadowOpacity: 0.25,
    shadowRadius: 2,
    shadowOffset: { width: 0, height: 0 },
    elevation: 4,
  },
  linkHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginBottom: 10,
  },
  linkContent: {
    flexDirection: "row",
    gap: 12,
    alignItems: "center",
  },
  linkIcon: {
    width: 20,
    height: 20,
  },
  linkLabel: {
    fontSize: 13,
    lineHeight: 17.55,
    fontWeight: "600",
    color: "#222222",
    fontFamily: "Pretendard",
  },
  linkPhoto: {
    width: 60,
    height: 60,
    borderRadius: 12,
  },
  linkTexts: {
    flex: 1,
    gap: 4,
    justifyContent: "center",
  },
  linkTitle: {
    fontSize: 13,
    lineHeight: 19.5,
    fontWeight: "600",
    color: "#222222",
    fontFamily: "Pretendard",
  },
  linkUrl: {
    fontSize: 13,
    lineHeight: 17.55,
    fontWeight: "500",
    color: "#888888",
    fontFamily: "Pretendard",
  },
});
