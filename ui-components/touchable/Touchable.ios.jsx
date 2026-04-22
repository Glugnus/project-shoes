import { TouchableOpacity } from "react-native";

export default function Touchable({ children, styles, onPress }) {
  return (
    <TouchableOpacity activeOpacity={0.7} style={styles} onPress={onPress}>
      {children}
    </TouchableOpacity>
  );
}
