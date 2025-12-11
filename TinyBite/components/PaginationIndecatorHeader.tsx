import { useRouter } from "expo-router";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";

interface PaginationIndecatorHeaderProps {
  page: 0 | 1 | 2 | 3;
}

const DOT_SIZE = 8;
const ACTIVE_COLOR = "#FF7A00";
const INACTIVE_COLOR = "#D9D9D9";

const PaginationIndecatorHeader = ({
  page,
}: PaginationIndecatorHeaderProps) => {
  const router = useRouter();

  const pages = [0, 1, 2, 3];

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => router.back()}>
        <Image
          source={require("../assets/images/chevron/chevron-left-44.png")}
          resizeMode="contain"
        />
      </TouchableOpacity>

      <View style={styles.indicatorContainer}>
        {pages.map((_, index) => {
          const backgroundColor =
            index === page ? ACTIVE_COLOR : INACTIVE_COLOR;

          return <View key={index} style={[styles.dot, { backgroundColor }]} />;
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingRight: 44,
    paddingBottom: 24,
  },
  indicatorContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 12,
  },
  dot: {
    width: DOT_SIZE,
    height: DOT_SIZE,
    borderRadius: DOT_SIZE / 2,
    aspectRatio: 1,
  },
});

export default PaginationIndecatorHeader;
