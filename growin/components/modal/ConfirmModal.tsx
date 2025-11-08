import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface ConfirmModalProps {
  title: string;
  text_15_500?: string;
  text_18_600?: string;
}

const ConfirmModal = ({
  title,
  text_15_500,
  text_18_600,
}: ConfirmModalProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.text_15_500}>{text_15_500}</Text>
      <Text style={styles.text_18_600}>{text_18_600}</Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.buttonYes}>
          <Text style={styles.buttonText}>예</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonNo}>
          <Text style={styles.buttonText}>아니오</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 350,
    paddingVertical: 20,
    paddingHorizontal: 15,
    alignItems: "flex-start",
    gap: 20,
    borderRadius: 15,
    backgroundColor: "#2A2C45",
  },
  title: {
    alignSelf: "stretch",
    color: "white",
    fontSize: 20,
    fontWeight: 700,
    lineHeight: 26,
  },
  text_15_500: {
    alignSelf: "stretch",
    color: "white",
    fontSize: 15,
    fontWeight: 500,
    lineHeight: 19.5,
  },
  text_18_600: {
    alignSelf: "stretch",
    color: "white",
    fontSize: 18,
    fontWeight: 600,
    lineHeight: 23.4,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  buttonYes: {
    width: 155,
    height: 45,
    justifyContent: "center",
    alignItems: "center",
    flexShrink: 0,
    borderRadius: 15,
    backgroundColor: "#8E8E93",
  },
  buttonNo: {
    width: 155,
    height: 45,
    justifyContent: "center",
    alignItems: "center",
    flexShrink: 0,
    borderRadius: 15,
    backgroundColor: "#FF008B",
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: 18,
    fontWeight: 600,
    lineHeight: 23.4,
  },
});

export default ConfirmModal;
