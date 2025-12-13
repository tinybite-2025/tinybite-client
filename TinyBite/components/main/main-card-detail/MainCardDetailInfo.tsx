import { colors } from "@/styles/colors";
import { Image, StyleSheet, Text, View } from "react-native";

type InfoType = "location" | "group" | "money";

interface InfoItem {
  type: InfoType;
  title: string;
  meta: string;
}

interface MainCardDetailInfoProps {
  items: InfoItem[];
}

const getIconByType = (type: InfoType) => {
  switch (type) {
    case "location":
      return require("@/assets/images/mainlist/detail/location-icon2.png");
    case "group":
      return require("@/assets/images/mainlist/detail/group-icon.png");
    case "money":
      return require("@/assets/images/mainlist/detail/money-icon.png");
    default:
      return require("@/assets/images/mainlist/detail/location-icon2.png");
  }
};

const MainCardDetailInfo = ({ items }: MainCardDetailInfoProps) => {
  return (
    <>
      <View style={styles.infoRowWrapper}>
        {items.map((item, index) => (
          <View key={index} style={styles.infoRow}>
            <View style={styles.infoIconWrap}>
              <Image
                source={getIconByType(item.type)}
                style={styles.infoIcon}
                resizeMode="contain"
              />
            </View>
            <View style={styles.infoBlock}>
              <Text style={styles.infoTitle}>{item.title}</Text>
              <Text style={styles.infoMeta}>{item.meta}</Text>
            </View>
          </View>
        ))}
      </View>
    </>
  );
};

export default MainCardDetailInfo;

const styles = StyleSheet.create({
  infoRowWrapper: {
    gap: 12,
  },
  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  infoBlock: {
    flex: 1,
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
    backgroundColor: colors.sub,
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
    color: colors.gray[1],
    fontFamily: "Pretendard",
  },
});
