import Ionicons from "@expo/vector-icons/Ionicons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Platform, Pressable, StyleSheet } from "react-native";
import { colors } from "../constants/colors";
import HomeScreen from "../screens/home";
import List from "../screens/list";
import NewsList from "../screens/newsList";
const Stack = createNativeStackNavigator();
import DrawerIcon from "../assets/images/navigation/drawer.svg";
import { spaces } from "../constants/spaces";

export default function HomeStackNavigator({ navigation }) {
  return (
    <Stack.Navigator
      screenOptions={({ navigation }) => ({
        headerStyle: {
          backgroundColor: colors.LIGHT,
        },
        headerShadowVisible: false,
        headerTitleAlign: "center",
      })}
    >
      <Stack.Screen
        component={HomeScreen}
        name="Home"
        options={({ navigation }) => ({
          title: "Shoes",
          headerLeft: () => (
            <Pressable
              style={styles.drawerIconContainer}
              onPress={() => navigation.getParent().getParent().openDrawer()}
            >
              <DrawerIcon />
            </Pressable>
          ),
        })}
      />
      <Stack.Group
        screenOptions={({ navigation }) => ({
          headerLeft: () => (
            <Pressable onPress={() => navigation.goBack()}>
              <Ionicons name="chevron-back" size={24} color={colors.DARK} />
            </Pressable>
          ),
        })}
      >
        <Stack.Screen component={List} name="List" navigation={navigation} />
        <Stack.Screen
          component={NewsList}
          name="NewsList"
          options={{ title: "Nouveautés" }}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  drawerIconContainer: {
    marginLeft: Platform.select({ ios: spaces.XS, android: spaces.S }),
  },
});
