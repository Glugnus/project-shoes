import { Image, Platform, Pressable, StyleSheet, View } from "react-native";
import { TextBoldL, TextBoldM, TextBoldXL } from "../../../ui-components/texts";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { ICON_SIZE } from "../../../constants/sizes";
import { colors } from "../../../constants/colors";
import { spaces } from "../../../constants/spaces";
import { radius } from "../../../constants/radius";
import { useDispatch } from "react-redux";
import {
  decreaseQuantity,
  increaseQuantity,
  removeShoesToCart,
} from "../../../store/slices/cartSlice";

export default function ListItem({ item }) {
  const dispatch = useDispatch();

  const decreaseShoesQuantity = () =>
    dispatch(decreaseQuantity({ id: item.id }));
  const increaseShoesQuantity = () =>
    dispatch(increaseQuantity({ id: item.id }));
  const removeShoes = () => dispatch(removeShoesToCart({ id: item.id }));

  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <View style={styles.imageContainer}>
          <Image source={item.image} style={styles.image} />
        </View>
        <View style={styles.columnContainer}>
          <TextBoldL>{item.name}</TextBoldL>
          <TextBoldL>{item.price} €</TextBoldL>
          <View style={styles.quantityContainer}>
            <Pressable
              style={[
                styles.operationSignContainer,
                styles.substractSignContainer,
              ]}
              onPress={decreaseShoesQuantity}
            >
              <TextBoldXL style={styles.minusText}>-</TextBoldXL>
            </Pressable>
            <TextBoldM style={styles.quantityText}>{item.quantity}</TextBoldM>
            <Pressable
              style={[styles.operationSignContainer, styles.addSignContainer]}
              onPress={increaseShoesQuantity}
            >
              <TextBoldXL style={styles.plusText}>+</TextBoldXL>
            </Pressable>
          </View>
        </View>
      </View>
      <View style={[styles.columnContainer, styles.rightContainer]}>
        <TextBoldL>{item.size}</TextBoldL>
        <FontAwesome
          name="trash-o"
          size={ICON_SIZE}
          color={colors.GREY}
          suppressHighlighting={true}
          onPress={removeShoes}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    height: 140,
    justifyContent: "space-between",
    paddingVertical: spaces.XS,
    paddingHorizontal: spaces.L,
  },
  leftContainer: {
    flexDirection: "row",
  },
  imageContainer: {
    width: 120,
    height: "100%",
    backgroundColor: colors.WHITE,
    borderRadius: radius.REGULAR,
    marginRight: spaces.L,
  },
  image: {
    width: 120,
    height: 120,
    transform: [
      {
        rotate: "-20deg",
      },
      { translateX: -spaces.S },
      { translateY: -spaces.S },
    ],
  },
  columnContainer: {
    justifyContent: "space-between",
    paddingVertical: spaces.M,
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  operationSignContainer: {
    width: spaces.XL,
    height: spaces.XL,
    borderRadius: radius.FULL,
    justifyContent: "center",
    alignItems: "center",
  },
  substractSignContainer: {
    backgroundColor: colors.WHITE,
  },
  minusText: { flex: Platform.select({ android: 1 }) },
  addSignContainer: {
    backgroundColor: colors.BLUE,
  },
  plusText: { color: colors.WHITE },
  quantityText: {
    marginHorizontal: spaces.M,
  },
  rightContainer: {
    alignItems: "center",
  },
});
