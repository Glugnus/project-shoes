import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { StyleSheet } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import BottomTabsNavigator from "./navigators/BottomTabsNavigator";

export default function App() {
  const [fontLoaded] = useFonts({
    Light: require("./assets/fonts/Montserrat-Light.ttf"),
    Regular: require("./assets/fonts/Montserrat-Regular.ttf"),
    Medium: require("./assets/fonts/Montserrat-Medium.ttf"),
    SemiBold: require("./assets/fonts/Montserrat-SemiBold.ttf"),
  });
  return fontLoaded ? (
    <SafeAreaProvider>
      <NavigationContainer>
        <BottomTabsNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  ) : null;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
