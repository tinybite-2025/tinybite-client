import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { ReactNode } from "react";
import {
    StyleProp,
    StyleSheet,
    Text,
    TextStyle,
    TouchableOpacity,
    View,
    ViewStyle,
} from "react-native";

interface PageHeaderProps {
  title: string;
  onPressBack?: () => void;
  rightElement?: ReactNode;
  containerStyle?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<TextStyle>;
}

const PageHeader = ({
  title,
  rightElement,
  containerStyle,
  titleStyle,
}: PageHeaderProps) => {
    
  const router = useRouter();

  const handlePressBack = () => {
    router.back();
  };

  return (
    <View style={[styles.container, containerStyle]}>
      <TouchableOpacity
        style={styles.sideButton}
        activeOpacity={0.8}
        onPress={handlePressBack}
      >
        <Ionicons name="chevron-back" size={24} color="#FFFFFF" />
      </TouchableOpacity>

      <Text style={[styles.title, titleStyle]} numberOfLines={1}>
        {title}
      </Text>

      <View style={styles.sideButton}>
        {rightElement}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  sideButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    flex: 1,
    fontSize: 20,
    lineHeight: 26,
    fontFamily: "Pretendard",
    fontWeight: "700",
    color: "#FFFFFF",
    textAlign: "center",
  },
});

export default PageHeader;

