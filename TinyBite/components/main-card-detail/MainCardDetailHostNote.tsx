import { Image, StyleSheet, Text, View } from "react-native";

interface MainCardDetailHostNoteProps {
  body: string;
}

const MainCardDetailHostNote = ({ body }: MainCardDetailHostNoteProps) => {
  return (
    <View style={styles.noteBox}>
      <View style={styles.noteHeader}>
        <Image
          source={require("@/assets/images/mainlist/detail/host-talk.png")}
          style={styles.noteIcon}
          resizeMode="contain"
        />
        <Text style={styles.noteTitle}>호스트의 한마디</Text>
      </View>
      <Text style={styles.noteBody}>{body}</Text>
    </View>
  );
};

export default MainCardDetailHostNote;

const styles = StyleSheet.create({
  noteBox: {
    width: "100%",
    backgroundColor: "#FCFBFF",
    borderRadius: 16,
    paddingHorizontal: 12,
    paddingVertical: 12,
    shadowColor: "#000000",
    shadowOpacity: 0.25,
    shadowRadius: 2,
    shadowOffset: { width: 0, height: 0 },
    elevation: 4,
  },
  noteTitle: {
    fontSize: 13,
    lineHeight: 17.55,
    fontWeight: "600",
    color: "#888888",
    fontFamily: "Pretendard",
  },
  noteHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    marginBottom: 6,
  },
  noteIcon: {
    width: 20,
    height: 20,
  },
  noteBody: {
    fontSize: 13,
    lineHeight: 19.5,
    fontWeight: "600",
    color: "#222222",
    fontFamily: "Pretendard",
  },
});
