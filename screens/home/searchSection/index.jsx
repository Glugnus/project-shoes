import { StyleSheet, View } from "react-native";
import SearchInput from "../../../ui-components/input/SearchInput";
import BrandList from "./components/BrandList";
import { IS_LARGE_SCREEN } from "../../../constants/sizes";

export default function SearchSection({
  inputValue,
  setInputValue,
  selectedBrand,
  setSelectedBrand,
}) {
  return (
    <View style={styles.container}>
      <SearchInput
        placeholder="Trouvez vos shoes"
        value={inputValue}
        onChangeText={setInputValue}
      />
      <BrandList
        selectedBrand={selectedBrand}
        setSelectedBrand={setSelectedBrand}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 120,
    minHeight: 120,
    justifyContent: "space-evenly",
    alignItems: IS_LARGE_SCREEN ? "center" : "flex-start",
  },
});
