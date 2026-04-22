import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Platform, StyleSheet, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import BottomTabsBackground from "../assets/images/navigation/bottomTabsBackground.svg";
import CartIcon from "../assets/images/navigation/cart.svg";
import FavoriteIcon from "../assets/images/navigation/favorite.svg";
import HomeIcon from "../assets/images/navigation/home.svg";
import NotificationsIcon from "../assets/images/navigation/notifications.svg";
import ProfileIcon from "../assets/images/navigation/user.svg";
import { colors } from "../constants/colors";
import { radius } from "../constants/radius";
import {
  FOCUSED_ICON_SIZE,
  IS_LARGE_SCREEN,
  SCREEN_WIDTH,
  SMALL_ICON_SIZE,
} from "../constants/sizes";
import Cart from "../screens/cart";
import Favorites from "../screens/favorites";
import Notifications from "../screens/notifications";
import Profile from "../screens/profile";
import StackNavigator from "./StackNavigator";

const Tabs = createBottomTabNavigator();

const originalWidth = 375;
const originalHeight = IS_LARGE_SCREEN ? 212 : 106;

const aspectRatio = originalWidth / originalHeight;

export default function BottomTabsNavigator() {
  const insets = useSafeAreaInsets();
  return (
    <Tabs.Navigator
      screenOptions={{
        tabBarStyle: {
          height: originalHeight,
          backgroundColor: colors.LIGHT,
          marginBottom: insets.bottom / 2,
          paddingTop: Platform.select({ ios: 50, android: 20 }),
          elevation: 0,
          borderTopWidth: 0,
        },
        tabBarIconStyle: {
          top: "50%",
          transform: [{ translateY: -SMALL_ICON_SIZE / 2 }],
        },
        tabBarButton: (props) => (
          <TouchableOpacity {...props} activeOpacity={1} />
        ),
        tabBarShowLabel: false,
        tabBarActiveTintColor: colors.BLUE,
        tabBarInactiveTintColor: colors.GREY,
        tabBarBackground: () => (
          <View style={{ aspectRatio }}>
            <BottomTabsBackground
              width={SCREEN_WIDTH}
              height={"100%"}
              viewBox={`0 0 ${originalWidth} ${originalHeight}`}
            />
          </View>
        ),
      }}
    >
      <Tabs.Screen
        component={StackNavigator}
        name="HomeStack"
        options={{
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <HomeIcon
              width={focused ? FOCUSED_ICON_SIZE : SMALL_ICON_SIZE}
              height={focused ? FOCUSED_ICON_SIZE : SMALL_ICON_SIZE}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        component={Favorites}
        name="Favorites"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <FavoriteIcon
              width={focused ? FOCUSED_ICON_SIZE : SMALL_ICON_SIZE}
              height={focused ? FOCUSED_ICON_SIZE : SMALL_ICON_SIZE}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        component={Cart}
        name="Cart"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <View
              style={[
                styles.cartContainer,
                focused ? styles.activeCart : styles.inactiveCart,
              ]}
            >
              <CartIcon
                width={focused ? FOCUSED_ICON_SIZE : SMALL_ICON_SIZE}
                height={focused ? FOCUSED_ICON_SIZE : SMALL_ICON_SIZE}
                color={focused ? colors.WHITE : color}
              />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        component={Notifications}
        name="Notifications"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <NotificationsIcon
              width={focused ? FOCUSED_ICON_SIZE : SMALL_ICON_SIZE}
              height={focused ? FOCUSED_ICON_SIZE : SMALL_ICON_SIZE}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        component={Profile}
        name="Profile"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <ProfileIcon
              width={focused ? FOCUSED_ICON_SIZE : SMALL_ICON_SIZE}
              height={focused ? FOCUSED_ICON_SIZE : SMALL_ICON_SIZE}
              color={color}
            />
          ),
        }}
      />
    </Tabs.Navigator>
  );
}

const styles = StyleSheet.create({
  cartContainer: {
    width: 60,
    height: 60,
    borderRadius: radius.FULL,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: Platform.select({
      ios: originalHeight - 60 + 25,
      android: originalHeight - 60 + 10,
    }),
  },
  activeCart: {
    backgroundColor: colors.BLUE,
  },
  inactiveCart: {
    backgroundColor: colors.WHITE,
  },
});
