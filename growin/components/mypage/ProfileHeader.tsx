import React from "react";
import {
    Image,
    ImageSourcePropType,
    ImageStyle,
    StyleProp,
    StyleSheet,
    Text,
    View,
    ViewStyle,
} from "react-native";

export interface ProfileMetadata {
  label: string;
  value: string;
}

interface ProfileHeaderProps {
  name?: string;
  metadata?: ProfileMetadata[];
  imageSource?: ImageSourcePropType;
  containerStyle?: StyleProp<ViewStyle>;
  imageStyle?: StyleProp<ImageStyle>;
}

const DEFAULT_IMAGE = require("@/assets/images/logo/growin-logo-home-small.png");
const DEFAULT_NAME = "랜덤닉네임123";
const DEFAULT_METADATA: ProfileMetadata[] = [
  { label: "관심 분야", value: "IT" },
  { label: "나의 목표", value: "취직 · 이직" },
];

const ProfileHeader = ({
  name = DEFAULT_NAME,
  metadata = DEFAULT_METADATA,
  imageSource = DEFAULT_IMAGE,
  containerStyle,
  imageStyle,
}: ProfileHeaderProps) => {
  return (
    <View style={[styles.profileSection, containerStyle]}>
      <Image
        source={imageSource}
        style={[styles.profileImage, imageStyle]}
        resizeMode="contain"
      />
      <View style={styles.profileInfo}>
        <Text style={styles.profileName}>{name}</Text>
        {metadata.length > 0 && (
          <View style={styles.profileMetaContainer}>
            {metadata.map((item) => (
              <View
                key={`${item.label}-${item.value}`}
                style={styles.profileMetaItem}
              >
                <Text style={styles.profileMetaLabel}>{item.label}</Text>
                <Text style={styles.profileMetaValue}>{item.value}</Text>
              </View>
            ))}
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  profileSection: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 23,
  },
  profileImage: {
    width: 46.5,
    height: 34.5,
  },
  profileInfo: {
    marginLeft: 16,
    flex: 1,
  },
  profileName: {
    fontSize: 18,
    lineHeight: 23.4,
    fontFamily: "Pretendard",
    fontWeight: "600",
    color: "#FFFFFF",
  },
  profileMetaContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 16,
    marginTop: 5,
  },
  profileMetaItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  profileMetaLabel: {
    fontSize: 14,
    color: "#8E8E93",
    fontFamily: "Pretendard",
    fontWeight: "500",
  },
  profileMetaValue: {
    fontSize: 14,
    color: "#FFFFFF",
    fontFamily: "Pretendard",
    fontWeight: "500",
  },
});

export default ProfileHeader;
