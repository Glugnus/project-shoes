import { useEffect, useState } from "react";
import { Platform, ScrollView, StyleSheet, View } from "react-native";
import { SCREEN_HEIGHT } from "../../constants/sizes";
import { spaces } from "../../constants/spaces";
import { shoes } from "../../data/shoes";
import CustomButton from "../../ui-components/buttons/CustomButton";
import DetailDescription from "./components/DetailDescription";
import DetailImage from "./components/DetailImage";
import Gallery from "./components/Gallery";
import Sizes from "./components/Sizes";

export default function Details({ route, navigation }) {
  const data = shoes
    .find((el) => el.stock.find((item) => item.id === route.params.id))
    .stock.find((item) => item.id === route.params.id);

  const images = data.items.map((item) => item.image);

  const [selectedImage, setSelectedImage] = useState(data.items[0].image);
  const [selectedSize, setSelectedSize] = useState();
  const [sizes, setSizes] = useState(data.items[0].sizes);

  useEffect(() => {
    setSizes(data.items.find((el) => el.image === selectedImage).sizes);
    setSelectedSize();
  }, [selectedImage]);

  useEffect(() => {
    navigation.setOptions({
      title: data.gender === "m" ? "Shoes Homme" : "Shoes Femme",
    });
  }, [route.params.id]);

  return (
    <View style={styles.mainContainer}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <DetailImage source={selectedImage} />
          <DetailDescription
            name={data.name}
            price={data.price}
            description={data.description}
          />
          <Gallery
            images={images}
            setSelectedImage={setSelectedImage}
            selectedImage={selectedImage}
          />
          <Sizes
            sizes={sizes}
            selectedSize={selectedSize}
            setSelectedSize={setSelectedSize}
          />
          <View style={styles.btnContainer}>
            <CustomButton
              text="Ajouter au panier"
              onPress={() => {
                console.log("Ajouter au panier");
              }}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    height: SCREEN_HEIGHT,
  },
  container: {
    position: "relative",
    bottom: Platform.select({ android: 100, ios: 100 }),
  },
  btnContainer: {
    width: "80%",
    alignSelf: "center",
    maxWidth: 400,
    marginVertical: spaces.XL,
  },
  fixView: {
    marginBottom: Platform.select({ android: -100, ios: -100 }),
  },
});
