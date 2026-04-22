import { StyleSheet, Text } from "react-native";
import { colors } from "../../constants/colors";
import { textSize } from "../../constants/textSize";

const TextMediumM = ({ children, blue = false, style }) => {
  return (
    <Text
      style={[styles.text, { color: blue ? colors.BLUE : colors.DARK }, style]}
    >
      {children}
    </Text>
  );
};

export default TextMediumM;

const styles = StyleSheet.create({
  text: {
    fontFamily: "Medium",
    fontSize: textSize.M,
  },
});
