import { StyleSheet, TouchableOpacity } from "react-native";
import { colors } from "../../constants/colors";
import { radius } from "../../constants/radius";
import { TextBoldL } from "../texts";

export default function CustomButton({ text, onPress }) {
  return (
    <TouchableOpacity
      style={styles.btnContainer}
      activeOpacity={0.8}
      onPress={onPress}
    >
      <TextBoldL style={styles.btnText}>{text}</TextBoldL>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btnContainer: {
    backgroundColor: colors.BLUE,
    width: "100%",
    height: 70,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: radius.FULL,
  },
  btnText: {
    color: colors.WHITE,
  },
});
