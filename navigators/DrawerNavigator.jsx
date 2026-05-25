import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from "@react-navigation/drawer";
import BottomTabsNavigator from "./BottomTabsNavigator";
import { Image, StyleSheet, Text, View } from "react-native";
import { TextBoldXL } from "../ui-components/texts";
import { spaces } from "../constants/spaces";
import { radius } from "../constants/radius";
import { colors } from "../constants/colors";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { SMALL_ICON_SIZE } from "../constants/sizes";
import HomeIcon from "../assets/images/navigation/home.svg";
import ProfileIcon from "../assets/images/navigation/user.svg";
import FavoriteIcon from "../assets/images/navigation/favorite.svg";
import CartIcon from "../assets/images/navigation/cart.svg";
import NotificationIcon from "../assets/images/navigation/notifications.svg";
import { useSelector } from "react-redux";
import { useGetUserByIdQuery } from "../store/api/userApi";
const Drawer = createDrawerNavigator();

const routes = [
  { name: "HomeStack", label: "Acceuil", icon: HomeIcon, index: 0 },
  { name: "Favorites", label: "Favoris", icon: FavoriteIcon, index: 1 },
  { name: "MainCart", label: "Panier", icon: CartIcon, index: 2 },
  {
    name: "Notifications",
    label: "Notifications",
    icon: NotificationIcon,
    index: 3,
  },
  { name: "Profile", label: "Profile", icon: ProfileIcon, index: 4 },
];

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        drawerStyle: { backgroundColor: colors.DARK },
        overlayColor: colors.DARK,
        headerShown: false,
      }}
    >
      <Drawer.Screen name="BottomTabs" component={BottomTabsNavigator} />
    </Drawer.Navigator>
  );
}

const Label = ({ shoesInCartCount, label, activeIndex, index }) => {
  return shoesInCartCount && label === "Panier" ? (
    <View style={styles.cartView}>
      <Text style={[styles.label, { color: colors.BLUE }]}>{label}</Text>
      <View style={styles.activeCartContainer}>
        <Text style={{ color: colors.WHITE }}>{shoesInCartCount}</Text>
      </View>
    </View>
  ) : (
    <Text
      style={[
        styles.label,
        { color: activeIndex === index ? colors.WHITE : colors.GREY },
      ]}
    >
      {label}
    </Text>
  );
};

function CustomDrawerContent(props) {
  const userId = useSelector((state) => state.user.id);
  const { data: user } = useGetUserByIdQuery(userId);
  const activeIndex = props.state.routes[0].state?.index || 0;
  const shoesInCartCount = user?.cart?.shoes?.length;
  return (
    <DrawerContentScrollView>
      <View style={styles.userInfosContainer}>
        <Image
          style={styles.image}
          source={{
            uri: "https://www.araoo.fr/media/images/beautiful-silhouette-image-1024x5.width-800.format-webp.webp",
          }}
        />
        <TextBoldXL style={styles.text}>John Doe</TextBoldXL>
      </View>
      {routes.map((route) => (
        <DrawerItem
          key={route.name}
          label={() => (
            <Label
              label={route.label}
              activeIndex={activeIndex}
              index={route.index}
              shoesInCartCount={shoesInCartCount}
            />
          )}
          icon={() => (
            <route.icon
              width={SMALL_ICON_SIZE}
              height={SMALL_ICON_SIZE}
              color={
                shoesInCartCount && route.label === "Panier"
                  ? colors.BLUE
                  : activeIndex === route.index
                    ? colors.WHITE
                    : colors.GREY
              }
            />
          )}
          onPress={() => {
            if (route.name === "MainCart") {
              props.navigation.navigate(route.name);
            } else {
              props.navigation.navigate("BottomTabs", { screen: route.name });
            }
          }}
          labelStyle={[
            styles.label,
            { color: activeIndex === route.index ? colors.WHITE : colors.GREY },
          ]}
        />
      ))}

      <DrawerItem
        label="Déconnexion"
        icon={() => (
          <MaterialIcons
            name="logout"
            size={SMALL_ICON_SIZE}
            color={colors.GREY}
          />
        )}
        labelStyle={[styles.label, { color: colors.GREY }]}
        style={styles.logoutItem}
      />
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  userInfosContainer: {
    marginLeft: spaces.L,
    marginVertical: spaces.XL,
  },
  image: {
    width: 90,
    height: 90,
    borderRadius: radius.FULL,
  },
  text: {
    color: colors.WHITE,
    marginTop: spaces.L,
  },
  label: {
    fontSize: 18,
    fontFamily: "Medium",
  },
  logoutItem: {
    borderTopWidth: 1,
    borderTopColor: colors.GREY,
    paddingTop: spaces.XL,
    marginTop: spaces.XL,
  },
  cartView: {
    flexDirection: "row",
  },
  activeCartContainer: {
    marginLeft: spaces.M,
    width: SMALL_ICON_SIZE,
    height: SMALL_ICON_SIZE,
    backgroundColor: colors.BLUE,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: radius.FULL,
  },
});
