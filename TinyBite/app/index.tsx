import { router } from "expo-router";
import { useEffect, useState } from "react";
import { Image, StyleSheet } from "react-native";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

export default function Index() {
  const [show, setShow] = useState(true);
  const opacity = useSharedValue(1);

  useEffect(() => {
    let innerTimeout: NodeJS.Timeout | number | undefined;
    const t = setTimeout(() => {
      opacity.value = withTiming(0, {
        duration: 600,
        easing: Easing.out(Easing.cubic),
      });

      innerTimeout = setTimeout(() => {
        setShow(false);
        router.replace("/(tabs)");
      }, 600);
    }, 3000);

    return () => {
      clearTimeout(t);
      if (innerTimeout !== undefined) {
        clearTimeout(innerTimeout);
      }
    };
  }, []);

  const aStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
  }));

  if (!show) return null;

  return (
    <Animated.View style={[styles.container, aStyle]}>
      <Image
        source={require("@/assets/images/splash.png")}
        style={styles.image}
      />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FE870F",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "100%",
  },
});
