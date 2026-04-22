import { TouchableNativeFeedback } from "react-native";
import { colors } from "../../constants/colors";

export default function Touchable({
  children,
  styles,
  onPress,
  color = colors.LIGHT,
}) {
  return (
    <TouchableNativeFeedback
      background={TouchableNativeFeedback.Ripple(color, true)}
      useForeground={true}
      style={styles}
      onPress={onPress}
    >
      {children}
    </TouchableNativeFeedback>
  );
}
