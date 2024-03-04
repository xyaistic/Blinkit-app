import React from "react";
import { NativeBaseProvider, extendTheme } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./navigation/AppNavigator";
import FontProvider, { useFont } from "./context/FontContext";
import LocationProvider from "./context/LocationContext";
import LoadingProvider, { useLoading } from "./context/LoadingContext"; // Import LoadingProvider
import { themeConfig } from "./constant/themeConfig";
import "react-native-gesture-handler";

export const theme = extendTheme({ themeConfig });

export default function App() {
  return (
    <NavigationContainer>
      <NativeBaseProvider theme={theme}>
        <LoadingProvider>
          <FontProvider>
            <LocationProvider>
              <AppNavigator />
            </LocationProvider>
          </FontProvider>
        </LoadingProvider>
      </NativeBaseProvider>
    </NavigationContainer>
  );
}
