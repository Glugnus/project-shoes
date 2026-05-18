import { StyleSheet, View } from "react-native";
import { colors } from "../../../constants/colors";
import { spaces } from "../../../constants/spaces";
import {
  TextBoldL,
  TextBoldXL,
  TextMediumM,
} from "../../../ui-components/texts";
import { ICON_SIZE } from "../../../constants/sizes";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useDispatch, useSelector } from "react-redux";
import {
  addFavorite,
  removeFavorite,
} from "../../../store/slices/favoritesSlice";
import {
  useAddFavoriteMutation,
  useGetAllFavoritesQuery,
  useRemoveFavoriteMutation,
  useUpdateFavoriteMutation,
  useUpdateFavoritesMutation,
} from "../../../store/api/favoritesApi";

export default function DetailDescription({ name, price, description, id }) {
  // const dispatch = useDispatch();
  // const favoritesShoesIds = useSelector(
  //   (state) => state.favorites.favoritesShoesIds,
  // );
  // const isFavorite = favoritesShoesIds.includes(id);

  const [addToFavorite] = useAddFavoriteMutation();
  const [updateFavorites] = useUpdateFavoritesMutation();
  const { data: favorite, favorites } = useGetAllFavoritesQuery(undefined, {
    selectFromResult: ({ data }) => ({
      data: data?.shoesIds?.find((elemId) => elemId === id),
      favorites: data,
    }),
  });

  const iconName = favorite ? "star" : "star-o";

  const toggleFavorite = () => {
    if (favorite) {
      // dispatch(removeFavorite(id));
      // Retirer lélément des favoris
      updateFavorites({
        id: favorites.id,
        shoesIds: favorites.shoesIds.filter((el) => el !== id),
      });
    } else if (favorites?.id) {
      updateFavorites({
        id: favorites.id,
        shoesIds: [...favorites.shoesIds, id],
      });
    } else {
      addToFavorite(id);
      // dispatch(addFavorite(id));
    }
  };
  return (
    <View style={styles.descriptionContainer}>
      <View>
        <TextMediumM style={styles.textSpacing} blue>
          Meilleur CHOIX
        </TextMediumM>
        <View style={styles.nameAndFavoriteContainer}>
          <TextBoldXL style={styles.textSpacing}>{name}</TextBoldXL>
          <FontAwesome
            name={iconName}
            size={ICON_SIZE}
            color={colors.BLUE}
            onPress={toggleFavorite}
            suppressHighlighting={true}
          />
        </View>
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
  nameAndFavoriteContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  descriptionText: {
    color: colors.GREY,
  },
});
