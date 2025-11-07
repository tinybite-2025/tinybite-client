import { useDateStore } from "@/store/useDateStore";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const CalendarHeader = () => {
  const { currentDate } = useDateStore();

  return (
    <View style={styles.header}>
      <View style={styles.headerLeft}>
        <Image
          source={require("@/assets/images/logo/growin-logo-home-small.png")}
          style={styles.logo}
        />
        <View style={styles.headerMenu}>
          <TouchableOpacity>
            <Text style={styles.dateText}>
              {currentDate.getFullYear()}년 {currentDate.getMonth() + 1}월
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require("@/assets/images/icon/arrow/arrow-down.png")}
              style={styles.arrow}
            />
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity>
        <Image
          source={require("@/assets/images/icon/user.png")}
          style={styles.profileImage}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    paddingTop: 10,
  },
  headerLeft: {
    flexDirection: "row",
    alignItems: "flex-end",
    gap: 10,
  },
  logo: { width: 31.812, height: 23.471 },
  headerMenu: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
  },
  dateText: {
    color: "#FFFFFF",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "600",
    lineHeight: 26,
  },
  arrow: {
    width: 24,
    height: 24,
    flexShrink: 0,
  },
  profileImage: {
    width: 23,
    height: 26,
    flexShrink: 0,
  },
});

export default CalendarHeader;
