import { StyleSheet, Text } from "react-native";
import { colors } from "../../constants/colors";
import { textSize } from "../../constants/textSize";

const TextRegularS = ({ children, blue = false, style }) => {
  return (
    <Text
      style={[styles.text, { color: blue ? colors.BLUE : colors.DARK }, style]}
    >
      {children}
    </Text>
  );
};

export default TextRegularS;

const styles = StyleSheet.create({
  text: {
    fontFamily: "Regular",
    fontSize: textSize.S,
  },
});
