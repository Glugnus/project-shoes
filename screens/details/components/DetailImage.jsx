import { Image, Platform, StyleSheet, View } from "react-native";
import { SCREEN_WIDTH } from "../../../constants/sizes";
import { spaces } from "../../../constants/spaces";

export default function DetailImage({ source }) {
  return (
    <View style={styles.imageContainer}>
      <Image style={styles.image} source={source} />
      <Image
        style={styles.imageStand}
        source={require("../../../assets/images/details/shoes-stand.png")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    position: "relative",
    height: SCREEN_WIDTH,
    width: SCREEN_WIDTH,
    alignItems: "center",
  },
  image: {
    height: SCREEN_WIDTH,
    width: SCREEN_WIDTH,
    resizeMode: "center",
    transform: [
      { rotate: "-20deg" },
      { translateX: -spaces.M },
      { translateY: -spaces.M },
    ],
  },
  imageStand: {
    position: "absolute",
    bottom: Platform.select({ android: 40, ios: 70 }),
  },
});
