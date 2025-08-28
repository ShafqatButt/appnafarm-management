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
import { LogBox, StatusBar } from "react-native";
import { COLORS } from "../theme/colors";
import { initialApiConfig } from "../services/api";
import "../i18n/i18n.config";
import "react-native-gesture-handler";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  useEffect(() => {
    initialApiConfig();
    LogBox.ignoreAllLogs();
  }, []);

  return (
    <GestureHandlerRootView style={GST.FLEX}>
      <SafeAreaProvider>
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            <Host>
              <StatusBar
                backgroundColor={COLORS.WHITE}
                barStyle={"dark-content"}
              />
              <RootLayoutNav />
            </Host>
          </PersistGate>
        </Provider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}

function RootLayoutNav() {
  return (
    <>
      <Stack screenOptions={{ headerShown: false, animation: "none" }}>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="appnafarm" />
        <Stack.Screen name="addFarm" />
        <Stack.Screen name="addFarmLocation" />
        <Stack.Screen name="addFarmType" />
        <Stack.Screen name="addFarmDetails" />
        <Stack.Screen
          name="planningAndRotationStep1"
          options={{ presentation: "transparentModal" }}
        />
        <Stack.Screen
          name="planningAndRotationSteps2"
          options={{ presentation: "transparentModal" }}
        />
        <Stack.Screen
          name="planningAndRotationSteps3"
          options={{ presentation: "transparentModal" }}
        />
        <Stack.Screen
          name="planningAndRotationSteps4"
          options={{ presentation: "transparentModal" }}
        />
        <Stack.Screen name="addDailyActivity" />
        <Stack.Screen name="addDailyOperations" />
        <Stack.Screen name="fertilization" />
        {/* AUTH STACK */}
        <Stack.Screen name="languageSelection" />
        <Stack.Screen name="login" />
        <Stack.Screen name="accountSuccess" />
        <Stack.Screen
          name="signupInvestorStep1"
          options={{ presentation: "transparentModal" }}
        />
        <Stack.Screen
          name="signupInvestorStep2"
          options={{ presentation: "transparentModal" }}
        />
        <Stack.Screen
          name="signupInvestorStep3"
          options={{ presentation: "transparentModal" }}
        />
        <Stack.Screen
          name="signupInvestorStep4"
          options={{ presentation: "transparentModal" }}
        />
        <Stack.Screen
          name="signupStep1"
          options={{ presentation: "transparentModal" }}
        />
        <Stack.Screen
          name="signupStep2"
          options={{ presentation: "transparentModal" }}
        />
        <Stack.Screen
          name="signupStep3"
          options={{ presentation: "transparentModal" }}
        />
        <Stack.Screen
          name="signupStep4"
          options={{ presentation: "transparentModal" }}
        />
      </Stack>
    </>
  );
}
