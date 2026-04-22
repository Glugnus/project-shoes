import AntDesign from "@expo/vector-icons/AntDesign";
import { Image, Platform, StyleSheet, View } from "react-native";
import { colors } from "../../../../constants/colors";
import { radius } from "../../../../constants/radius";
import { IS_LARGE_SCREEN } from "../../../../constants/sizes";
import { spaces } from "../../../../constants/spaces";
import {
  TextBoldL,
  TextMediumM,
  TextMediumS,
} from "../../../../ui-components/texts";
import Touchable from "../../../../ui-components/touchable/Touchable";

export default function VerticalCard({ item }) {
  return (
    <View style={styles.container}>
      <Touchable onPress={() => {}}>
        <View style={styles.touchableContainer}>
          <View style={styles.imageContainer}>
            <Image source={item.items[0].image} style={styles.image} />
          </View>
          <View style={styles.descriptionContainer}>
            <View>
              <TextMediumS blue>TOP VENTE</TextMediumS>
              <TextBoldL style={styles.itemName}>{item.name}</TextBoldL>
            </View>
            <TextMediumM>{item.price} €</TextMediumM>
          </View>
          <View style={styles.btn}>
            <AntDesign name="plus" size={24} color={colors.WHITE} />
          </View>
        </View>
      </Touchable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: IS_LARGE_SCREEN ? 240 : 180,
    height: Platform.select({ ios: "100%", android: "98%" }),
    backgroundColor: colors.WHITE,
    borderRadius: radius.REGULAR,
    elevation: 2,
    shadowColor: colors.DARK,
    shadowOpacity: 0.5,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 2,
    overflow: "hidden",
  },
  touchableContainer: {
    width: "100%",
    height: "100%",
    padding: spaces.S,
    paddingVertical: 2,
  },
  imageContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: spaces.S,
  },
  image: {
    width: "100%",
    height: "100%",
    transform: [
      { rotate: "-20deg" },
      { translateX: -spaces.S },
      { translateY: -spaces.S },
    ],
  },
  descriptionContainer: {
    flex: IS_LARGE_SCREEN ? 0.7 : 0.2,
    justifyContent: "space-between",
    padding: spaces.S,
  },
  itemName: {
    marginTop: spaces.S,
  },
  btn: {
    position: "absolute",
    bottom: 0,
    right: 0,
    backgroundColor: colors.BLUE,
    borderTopLeftRadius: radius.REGULAR,
    borderBottomRightRadius: radius.REGULAR,
    justifyContent: "center",
    alignItems: "center",
    width: 36,
    height: 36,
  },
});
