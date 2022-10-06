import React, { useContext } from "react";
import { AccountNavigator } from "./account.navigator";
import { NavigationContainer } from "@react-navigation/native";
import { AppNavigator } from "./app.navigation";
import { AuthenticationContext } from "../../services/authentication/authentication.context";

export const Navigation = () => {
  const { isAuthenticated } = useContext(AuthenticationContext);
  return (
    <NavigationContainer>
      {isAuthenticated ? <AppNavigator /> : <AccountNavigator />}
    </NavigationContainer>
  );
};
