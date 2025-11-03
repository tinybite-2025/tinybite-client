import { Ionicons } from "@expo/vector-icons";
import { StyleProp, StyleSheet, TouchableOpacity, View, ViewStyle } from "react-native";

interface AddButtonProps {
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
}

const AddButton = ({ onPress, style }: AddButtonProps) => {
  return (
    <TouchableOpacity style={[styles.taskAddButton, style]} activeOpacity={0.7} onPress={onPress}>
      <View style={styles.taskAddCircle}>
        <Ionicons name="add" size={20} color="#FFFFFF" />
      </View>
    </TouchableOpacity>
  );
};

export default AddButton;

const styles = StyleSheet.create({
  taskAddButton: {
    width: 350,
    height: 40,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#2A2C45",
    borderRadius: 15,
  },
  taskAddCircle: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: "#3F4360",
    alignItems: "center",
    justifyContent: "center",
  },
});


