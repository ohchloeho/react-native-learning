import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Text, View } from "react-native";

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
import { RhymeScreen } from "./src/screens/rhyme.screen";

import { DefinitionContextProvider } from "./src/services/definitions/definition.context";
import {
  RhymeContext,
  RhymeContextProvider,
} from "./src/services/rhymes/rhymes.context";

const HeadLogo = styled(Text)`
  font-size: ${theme.fontSizes.h1};
  color: ${theme.colors.text.primary};
`;

const DisplayContainer = styled(View)`
  flex: 0.8;
  width: 350px;
  border: 2px solid ${(props) => props.theme.colors.text.primary};
  margin-bottom: ${(props) => props.theme.marginSizes.sm};
  border-radius: 10px;
  overflow: hidden;
`;

const Footer = styled(Text)`
  margin-top: auto;
  color: ${theme.colors.text.primary};
  font-size: ${theme.fontSizes.body};
  font-weight: ${theme.fontWeights.heavy};
  flex: 0.05;
`;

export default function App() {
  const [wordOutput, setWordOutput] = useState("enter a word");
  const [definitionDisplay, setDefinitionDisplay] = useState(false);
  const [synonymDisplay, setSynonymDisplay] = useState(false);
  const [rhymeDisplay, setRhymeDisplay] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <DefinitionContextProvider>
        <RhymeContextProvider>
          <SafeArea>
            <HeadLogo>wordThing</HeadLogo>
            <InputBar
              setWordOutput={setWordOutput}
              setDefinitionDisplay={setDefinitionDisplay}
              setSynonymDisplay={setSynonymDisplay}
              setRhymeDisplay={setRhymeDisplay}
              wordOutput={wordOutput}
            />
            <WordSearchOutput word={wordOutput} />
            <DisplayContainer>
              {definitionDisplay && <DefinitionScreen word={wordOutput} />}
              {synonymDisplay && <SynonymScreen word={wordOutput} />}
              {rhymeDisplay && <RhymeScreen word={wordOutput} />}
            </DisplayContainer>
            <Footer>powered by Free Dictionary API and RhymeBrain</Footer>
          </SafeArea>
          <StatusBar style="auto" />
        </RhymeContextProvider>
      </DefinitionContextProvider>
    </ThemeProvider>
  );
}
