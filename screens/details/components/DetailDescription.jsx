import { StyleSheet, View } from "react-native";
import { colors } from "../../../constants/colors";
import { spaces } from "../../../constants/spaces";
import {
  TextBoldL,
  TextBoldXL,
  TextMediumM,
} from "../../../ui-components/texts";

export default function DetailDescription({ name, price, description }) {
  return (
    <View style={styles.descriptionContainer}>
      <View>
        <TextMediumM style={styles.textSpacing} blue>
          Meilleur CHOIX
        </TextMediumM>
        <TextBoldXL style={styles.textSpacing}>{name}</TextBoldXL>
      </View>
      <TextBoldL style={styles.textSpacing}>{price} €</TextBoldL>
      <TextMediumM style={styles.descriptionText}>{description}</TextMediumM>
    </View>
  );
}

const styles = StyleSheet.create({
  descriptionContainer: {
    paddingHorizontal: spaces.L,
  },
  textSpacing: {
    marginBottom: spaces.S,
  },
  descriptionText: {
    color: colors.GREY,
  },
});
