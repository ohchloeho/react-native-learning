import { StatusBar } from "expo-status-bar";
import React from "react";
import { Navigation } from "./infrastructure/navigation";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./infrastructure/theme/index";
import { restuarantRequest } from "./services/restaurants/restaurants.service";
import { RestaurantContextProvider } from "./services/restaurants/restaurants.context";
import { LocationContextProvider } from "./services/location/location.context";

//fonts loading
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import {
  useFonts as useLato,
  Lato_400Regular,
  Lato_700Bold,
} from "@expo-google-fonts/lato";

export default function App() {
// fonts functions
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });
  const [latoLoaded] = useLato({
    Lato_400Regular,
    Lato_700Bold,
  });
  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }
  restuarantRequest();
 

  return (
    <>
      <ThemeProvider theme={theme}>
        <LocationContextProvider>
          <RestaurantContextProvider>
            <Navigation/>
          </RestaurantContextProvider>
        </LocationContextProvider>
      </ThemeProvider>
      <StatusBar style="auto" />
    </>
  );
}
