import { StyleSheet, TouchableOpacity, View } from "react-native";
import { spaces } from "../../../constants/spaces";
import { TextBoldL, TextMediumM } from "../../../ui-components/texts";

export default function Banner({ text, navigate }) {
  return (
    <View style={styles.container}>
      <TextBoldL>{text}</TextBoldL>
      <TouchableOpacity onPress={navigate}>
        <TextMediumM blue> Voir tout</TextMediumM>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingHorizontal: spaces.L,
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: spaces.M,
  },
});
