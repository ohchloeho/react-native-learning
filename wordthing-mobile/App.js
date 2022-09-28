import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Text} from "react-native";

// UI appearances
import { theme } from "./src/themes/index";
import { SafeArea } from "./src/components/safeArea.component";
import { InputBar } from "./src/components/input.component";
import styled, { ThemeProvider } from "styled-components/native";

// output screens / components
import { DefinitionScreen } from "./src/screens/definitions.screen";
import { WordSearchOutput } from "./src/screens/wordOutput.screen";

const HeadLogo = styled(Text)`
  font-size: ${theme.fontSizes.h1};
  color: ${theme.colors.text.primary};
`;

export default function App() {
  const [wordOutput, setWordOutput] = useState("enter a word");
  return (
    <>
      <ThemeProvider theme={theme}>
        <SafeArea>
          <HeadLogo>wordThing</HeadLogo>
          <InputBar setWordOutput={setWordOutput}/>
          <WordSearchOutput word={wordOutput} />
          <DefinitionScreen word="hello"/>
        </SafeArea>
        <StatusBar style="auto" />
      </ThemeProvider>
    </>
  );
}
