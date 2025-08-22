import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import "react-native-reanimated";
import { GST } from "../theme/globalStyles";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import { persistor, store } from "../redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { Host } from "react-native-portalize";
import { StatusBar } from "react-native";
import { COLORS } from "../theme/colors";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "(tabs)",
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    ExtraBold: require("../assets/fonts/Urbanist-ExtraBold.ttf"),
    Bold: require("../assets/fonts/Urbanist-Bold.ttf"),
    SemiBold: require("../assets/fonts/Urbanist-SemiBold.ttf"),
    Medium: require("../assets/fonts/Urbanist-Medium.ttf"),
    Regular: require("../assets/fonts/Urbanist-Regular.ttf"),
    Italic: require("../assets/fonts/Urbanist-Italic.ttf"),
    Light: require("../assets/fonts/Urbanist-Light.ttf"),
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  return (
    <>
      <GestureHandlerRootView style={GST.FLEX}>
        <SafeAreaProvider>
          <Provider store={store}>
            <PersistGate persistor={persistor}>
              <Host>
                <StatusBar
                  backgroundColor={COLORS.WHITE}
                  barStyle={"dark-content"}
                />
                <Stack
                  screenOptions={{ headerShown: false, animation: "none" }}
                >
                  <Stack.Screen
                    name="(tabs)"
                    options={{ headerShown: false }}
                  />
                  <Stack.Screen name="appnafarm" />
                  <Stack.Screen
                    name="addFarm"
                    options={{ presentation: "transparentModal" }}
                  />
                  <Stack.Screen
                    name="addFarm/addFarmLocation"
                    options={{ presentation: "transparentModal" }}
                  />
                  <Stack.Screen
                    name="addFarm/addFarmType"
                    options={{ presentation: "transparentModal" }}
                  />
                  <Stack.Screen
                    name="addFarm/addFarmDetails"
                    options={{ presentation: "transparentModal" }}
                  />
                  <Stack.Screen
                    name="planningAndRotationSteps/step1"
                    options={{ presentation: "transparentModal" }}
                  />
                  <Stack.Screen
                    name="planningAndRotationSteps/step2"
                    options={{ presentation: "transparentModal" }}
                  />
                  <Stack.Screen
                    name="planningAndRotationSteps/step3"
                    options={{ presentation: "transparentModal" }}
                  />
                  <Stack.Screen
                    name="planningAndRotationSteps/step4"
                    options={{ presentation: "transparentModal" }}
                  />
                  <Stack.Screen
                    name="dailyOperations/addDailyActivity"
                    options={{ presentation: "transparentModal" }}
                  />
                  <Stack.Screen
                    name="dailyOperations/addDailyOperations"
                    options={{ presentation: "transparentModal" }}
                  />
                  <Stack.Screen
                    name="dailyOperations/fertilization"
                    options={{ presentation: "transparentModal" }}
                  />
                  {/* AUTH STACK */}
                  <Stack.Screen
                    name="auth/languageSelection"
                    options={{ presentation: "transparentModal" }}
                  />
                  <Stack.Screen
                    name="auth/login"
                    options={{ presentation: "transparentModal" }}
                  />
                  <Stack.Screen
                    name="auth/signUp/investor/accountSuccess"
                    options={{ presentation: "transparentModal" }}
                  />
                  <Stack.Screen
                    name="auth/signUp/investor/step1"
                    options={{ presentation: "transparentModal" }}
                  />
                  <Stack.Screen
                    name="auth/signUp/investor/step2"
                    options={{ presentation: "transparentModal" }}
                  />
                  <Stack.Screen
                    name="auth/signUp/investor/step3"
                    options={{ presentation: "transparentModal" }}
                  />
                  <Stack.Screen
                    name="auth/signUp/investor/step4"
                    options={{ presentation: "transparentModal" }}
                  />
                  <Stack.Screen
                    name="auth/signUp/step1"
                    options={{ presentation: "transparentModal" }}
                  />
                  <Stack.Screen
                    name="auth/signUp/step2"
                    options={{ presentation: "transparentModal" }}
                  />
                  <Stack.Screen
                    name="auth/signUp/step3"
                    options={{ presentation: "transparentModal" }}
                  />
                  <Stack.Screen
                    name="auth/signUp/step4"
                    options={{ presentation: "transparentModal" }}
                  />
                </Stack>
              </Host>
            </PersistGate>
          </Provider>
        </SafeAreaProvider>
      </GestureHandlerRootView>
    </>
  );
}
