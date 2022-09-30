import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Text } from "react-native";

// NavBar

// UI appearances
import { theme } from "./src/themes/index";
import { SafeArea } from "./src/components/safeArea.component";
import { InputBar } from "./src/components/input.component";
import styled, { ThemeProvider } from "styled-components/native";

// output screens / components
import { DefinitionScreen } from "./src/screens/definitions.screen";
import { WordSearchOutput } from "./src/screens/wordOutput.screen";
import { SynonymScreen } from "./src/screens/synonyms.screen";

import { DefinitionContextProvider } from "./src/services/definitions/definition.context";

const HeadLogo = styled(Text)`
  font-size: ${theme.fontSizes.h1};
  color: ${theme.colors.text.primary};
`;

export default function App() {
  const [wordOutput, setWordOutput] = useState("enter a word");
  const [definitionDisplay, setDefinitionDisplay] = useState(false);
  const [synonymDisplay, setSynonymDisplay] = useState(false);

  return (
    <>
      <ThemeProvider theme={theme}>
        <DefinitionContextProvider>
          <SafeArea>
            <HeadLogo>wordThing</HeadLogo>
            <InputBar
              setWordOutput={setWordOutput}
              setDefinitionDisplay={setDefinitionDisplay}
              setSynonymDisplay={setSynonymDisplay}
            />
            <WordSearchOutput word={wordOutput} />
            {definitionDisplay && <DefinitionScreen word={wordOutput} />}
            {synonymDisplay && <SynonymScreen word={wordOutput} />}
          </SafeArea>
          <StatusBar style="auto" />
        </DefinitionContextProvider>
      </ThemeProvider>
    </>
  );
}
