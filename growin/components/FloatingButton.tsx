import { Image, ImageSourcePropType, ImageStyle, StyleProp, StyleSheet, TouchableOpacity, ViewStyle } from "react-native";

interface FloatingButtonProps {
  onPress?: () => void;
  iconSource: ImageSourcePropType;
  containerStyle?: StyleProp<ViewStyle>;
  iconStyle?: StyleProp<ImageStyle>;
  activeOpacity?: number;
}

export default function FloatingButton({
  onPress,
  iconSource,
  containerStyle,
  iconStyle,
  activeOpacity = 0.8,
}: FloatingButtonProps) {
  return (
    <TouchableOpacity
      style={[styles.container, containerStyle]}
      onPress={onPress}
      activeOpacity={activeOpacity}
    >
      <Image source={iconSource} style={[styles.icon, iconStyle]} resizeMode="contain" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    right: 20,
    bottom: 20,
    width: 58,
    height: 58,
    borderRadius: 29,
    backgroundColor: "#3F4360",
    padding: 19,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 4,
  },
  icon: {
    width: 20,
    height: 20,
  },
});
