import React from "react";
import { Text } from "react-native-paper";
import { SafeArea } from "../../components/safe-area.component";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { theme } from "../theme/index";
import { RestaurantsNavigator } from "./restaurants.navigator";

export const AppNavigator = () => {
  const Tab = createMaterialBottomTabNavigator();

  const TAB_ICON = {
    Restaurants: "md-restaurant",
    Map: "map",
    Settings: "md-settings",
  };

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

  //icons function construction
  const screenOptions = ({ route }) => {
    const iconName = TAB_ICON[route.name];
    return {
      tabBarIcon: ({ focused }) => {
        let iconName;
        let color;
        if (route.name === "Restaurants") {
          iconName = focused ? "md-restaurant" : "md-restaurant-outline";
          color = focused
            ? theme.colors.brand.primary
            : theme.colors.text.disabled;
        } else if (route.name === "Settings") {
          iconName = focused ? "md-settings" : "md-settings-outline";
          color = focused
            ? theme.colors.brand.primary
            : theme.colors.text.disabled;
        } else if (route.name === "Map") {
          iconName = focused ? "map" : "map-outline";
          color = focused
            ? theme.colors.brand.primary
            : theme.colors.text.disabled;
        }
        // You can return any component that you like here!
        return <Ionicons name={iconName} size={20} color={color} />;
      },
    };
  };
  return (
    <NavigationContainer>
      <Tab.Navigator
        barStyle={{
          backgroundColor: theme.colors.bg.primary,
          height: 70,
        }}
        screenOptions={screenOptions}
      >
        <Tab.Screen name="Restaurants" component={RestaurantsNavigator} />
        <Tab.Screen name="Map" component={Map} />
        <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
