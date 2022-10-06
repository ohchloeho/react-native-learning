import { StatusBar } from "expo-status-bar";
import React from "react";
import { Navigation } from "./infrastructure/navigation";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./infrastructure/theme/index";
import { restuarantRequest } from "./services/restaurants/restaurants.service";
import { RestaurantContextProvider } from "./services/restaurants/restaurants.context";
import { LocationContextProvider } from "./services/location/location.context";
import { FavouritesContextProvider } from "./services/favourites/favourites.context";
import { AuthenticationContextProvider } from "./services/authentication/authentication.context";

import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

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

// firebase configs
const firebaseConfig = {
  apiKey: "AIzaSyCJg0VrYiMQFNRU99gy8pAutOigQDJ2lMY",
  authDomain: "grubrunner-7daba.firebaseapp.com",
  projectId: "grubrunner-7daba",
  storageBucket: "grubrunner-7daba.appspot.com",
  messagingSenderId: "820296502123",
  appId: "1:820296502123:web:2d1917a656e1e8874b1a2e",
};

const firebaseApp = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : null;

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
        <AuthenticationContextProvider>
          <FavouritesContextProvider>
            <LocationContextProvider>
              <RestaurantContextProvider>
                <Navigation />
              </RestaurantContextProvider>
            </LocationContextProvider>
          </FavouritesContextProvider>
        </AuthenticationContextProvider>
      </ThemeProvider>
      <StatusBar style="auto" />
    </>
  );
}
