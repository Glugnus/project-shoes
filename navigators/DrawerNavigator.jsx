import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from "@react-navigation/drawer";
import BottomTabsNavigator from "./BottomTabsNavigator";
import { Image, StyleSheet, View } from "react-native";
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
const Drawer = createDrawerNavigator();

const routes = [
  { name: "HomeStack", label: "Acceuil", icon: HomeIcon, index: 0 },
  { name: "Favorites", label: "Favoris", icon: FavoriteIcon, index: 1 },
  { name: "Cart", label: "Panier", icon: CartIcon, index: 2 },
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

function CustomDrawerContent(props) {
  const activeIndex = props.state.routes[0].state?.index || 0;
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
          label={route.label}
          icon={() => (
            <route.icon
              width={SMALL_ICON_SIZE}
              height={SMALL_ICON_SIZE}
              color={activeIndex === route.index ? colors.WHITE : colors.GREY}
            />
          )}
          onPress={() =>
            props.navigation.navigate("BottomTabs", { screen: route.name })
          }
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
});
