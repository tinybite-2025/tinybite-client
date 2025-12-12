import { Image, StyleSheet, Text, View } from "react-native";

interface MainCardDetailHostProps {
  avatar: any;
  name: string;
  location: string;
}

const MainCardDetailHost = ({
  avatar,
  name,
  location,
}: MainCardDetailHostProps) => {
  return (
    <View style={styles.rowBetween}>
      <View style={styles.hostRow}>
        <View style={styles.hostAvatar}>
          <Image
            source={avatar}
            style={styles.hostAvatarImage}
            resizeMode="contain"
          />
        </View>
        <View>
          <Text style={styles.hostName}>{name}</Text>
          <View style={styles.hostMetaRow}>
            <Image
              source={require("@/assets/images/mainlist/detail/location-icon.png")}
              style={styles.hostMetaIcon}
              resizeMode="contain"
            />
            <Text style={styles.hostMeta}>{location}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default MainCardDetailHost;

const styles = StyleSheet.create({
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
    shadowOffset: { width: 0, height: 0 },
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
});
