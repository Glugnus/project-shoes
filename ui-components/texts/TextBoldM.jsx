import { StyleSheet, Text } from "react-native";
import { colors } from "../../constants/colors";
import { textSize } from "../../constants/textSize";

const TextBoldM = ({ children, blue = false, style }) => {
  return (
    <Text
      style={[styles.text, { color: blue ? colors.BLUE : colors.DARK }, style]}
    >
      {children}
    </Text>
  );
};

export default TextBoldM;

const styles = StyleSheet.create({
  text: {
    fontFamily: "SemiBold",
    fontSize: textSize.M,
  },
});
