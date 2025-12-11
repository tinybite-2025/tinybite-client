import { Image, StyleSheet, Text, View } from "react-native";

const PRIMARY_COLOR = "#FE870F";

const MainHeader = () => (
  <View style={styles.container}>
      <View style={styles.textBlock}>
        <View style={styles.locationRow}>
          <View style={styles.mainLogoWrapper}>
            <Image
              source={require("@/assets/images/main/mainlogo.png")}
              style={styles.mainLogo}
              resizeMode="contain"
            />
          </View>
          <Text style={styles.location}>역삼동</Text>
        </View>
          <Text style={styles.greetingLine1}>
            가짜대학생<Text style={styles.greetingLine2}>님,{"\n"}오늘은 무엇을 나눌까요 ?</Text>
          </Text>
        </View>
      <View style={styles.characterWrapper}>
        <Image
          source={require("@/assets/images/main/character.png")}
          style={styles.character}
          resizeMode="contain"
        />
      </View>
    </View>
  );

export default MainHeader;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 219,
    backgroundColor: PRIMARY_COLOR,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    position: "relative",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    overflow: "hidden",
  },
  textBlock: {
    flex: 1,
    gap: 26.5,
  },
  locationRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginTop: 22,
  },
  location: {
    fontSize: 20,
    lineHeight: 27,
    fontWeight: "700",
    color: "#FFFFFF",
    fontFamily: "Pretendard",
  },
  mainLogo: {
    width: 24,
    height: 28,
  },
  mainLogoWrapper: {
    padding: 0,
    width: 23.99945,
    height: 27.99909,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 6,
  },
  greetingLine1: {
    fontSize: 20,
    lineHeight: 30,
    fontWeight: "700",
    color: "#FFFFFF",
    fontFamily: "Pretendard",
  },
  greetingLine2: {
    fontSize: 18,
    lineHeight: 27,
    fontWeight: "700",
    color: "#FFFFFF",
    fontFamily: "Pretendard",
  },
  characterWrapper: {
    position: "absolute",
    right: 25.03,
    bottom: -6,
  },
  character: {
    width: 162.59781,
    height: 167.88554,
  },
});

