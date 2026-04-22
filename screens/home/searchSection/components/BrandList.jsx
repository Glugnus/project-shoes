import { FlatList, StyleSheet } from "react-native";
import { spaces } from "../../../../constants/spaces";
import { brands } from "../../../../data/brands";
import ItemSeparator from "../../../../ui-components/separators/ListItemSeparator";
import BrandItem from "./BrandItem";

export default function BrandList({ selectedBrand, setSelectedBrand }) {
  return (
    <FlatList
      showsHorizontalScrollIndicator={false}
      horizontal
      bounces={false}
      data={brands}
      keyExtractor={(item) => item.name}
      renderItem={({ item, index }) => (
        <BrandItem
          item={item}
          selectedBrand={selectedBrand}
          setSelectedBrand={setSelectedBrand}
          index={index}
        />
      )}
      style={styles.listContainer}
      contentContainerStyle={styles.contentStyle}
      ItemSeparatorComponent={<ItemSeparator width={spaces.S} />}
    />
  );
}

const styles = StyleSheet.create({
  listContainer: {
    flexGrow: 0,
  },
  contentStyle: {
    justifyContent: "space-between",
  },
});
