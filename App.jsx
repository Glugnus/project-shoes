if (__DEV__) {
  require("./ReactotronConfig");
}
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { StyleSheet } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import MainStackNavigator from "./navigators/MainStackNavigator";
import { Provider } from "react-redux";
import { store } from "./store/store";
import "./assets/styles/global.css";

export default function App() {
  const [fontLoaded] = useFonts({
    Light: require("./assets/fonts/Montserrat-Light.ttf"),
    Regular: require("./assets/fonts/Montserrat-Regular.ttf"),
    Medium: require("./assets/fonts/Montserrat-Medium.ttf"),
    SemiBold: require("./assets/fonts/Montserrat-SemiBold.ttf"),
  });
  return fontLoaded ? (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer>
          <MainStackNavigator />
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
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
