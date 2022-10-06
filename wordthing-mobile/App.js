import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// UI appearances
import { theme } from "./src/themes/index";
import { ThemeProvider } from "styled-components/native";

// output screens / components
import { WordFunctionScreen } from "./src/screens/word-functions.screen";
import { HistoryScreen } from "./src/screens/history.screen";

import { DefinitionContextProvider } from "./src/services/definitions/definition.context";
import { RhymeContextProvider } from "./src/services/rhymes/rhymes.context";

const Stack = createStackNavigator();

export default function App() {
  const [toggle, setToggle] = useState(true);

  return (
    <ThemeProvider theme={theme}>
      <DefinitionContextProvider>
        <RhymeContextProvider>
          <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown:false}}>
              <Stack.Screen
                name="Word_Function"
                component={WordFunctionScreen}
              />
              <Stack.Screen name="History" component={HistoryScreen} />
            </Stack.Navigator>
          </NavigationContainer>
          <StatusBar style="auto" />
        </RhymeContextProvider>
      </DefinitionContextProvider>
    </ThemeProvider>
  );
}
