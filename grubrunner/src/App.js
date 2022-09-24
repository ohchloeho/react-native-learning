import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text } from "react-native";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./infrastructure/theme/index";
import { RestaurantsScreen } from "./features/restaurants/screens/restaurants.screen";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { SafeArea } from "./components/safe-area.component";
import { FontAwesome5, Ionicons } from "@expo/vector-icons";

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

  const Tab = createMaterialBottomTabNavigator();

  const Settings = () => {
    return (
      <SafeArea>
        <Text>settings</Text>
      </SafeArea>
    );
  };
  const Map = () => {
    return (
      <SafeArea>
        <Text>Map</Text>
      </SafeArea>
    );
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <Tab.Navigator
            barStyle={{
              backgroundColor: theme.colors.bg.primary,
              height: 70,
            }}
            //icons function construction
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused}) => {
                let iconName;
                let color
                if (route.name === "Restaurants") {
                  iconName = focused
                    ? "md-restaurant"
                    : "md-restaurant-outline";
                  color = focused ? theme.colors.brand.primary: theme.colors.text.disabled;
                } else if (route.name === "Settings") {
                  iconName = focused ? "md-settings" : "md-settings-outline";
                  color = focused ? theme.colors.brand.primary: theme.colors.text.disabled;
                } else if (route.name === "Map") {
                  iconName = focused ? "map" : "map-outline";
                  color = focused ? theme.colors.brand.primary: theme.colors.text.disabled;
                }
                // You can return any component that you like here!
                return <Ionicons name={iconName} size={20} color={color}/>;
              },
            })}
          >
            <Tab.Screen name="Restaurants" component={RestaurantsScreen} />
            <Tab.Screen name="Map" component={Map} />
            <Tab.Screen name="Settings" component={Settings} />
          </Tab.Navigator>
        </NavigationContainer>
      </ThemeProvider>
      <StatusBar style="auto" />
    </>
  );
}
