import React, { useState } from "react";
import { HeadLogo, Footer, DisplayContainer } from "./styles";
import { SafeArea } from "../components/safeArea.component";
import { InputBar } from "../components/input.component";

import { WordSearchOutput } from "./wordOutput.screen";
import { DefinitionScreen } from "./definitions.screen";
import { RhymeScreen } from "./rhyme.screen";
import { SynonymScreen } from "./synonyms.screen";
import { Btn } from "../components/button.component";

export const WordFunctionScreen = ({ navigation }) => {
  const [wordOutput, setWordOutput] = useState("enter a word");
  const [definitionDisplay, setDefinitionDisplay] = useState(false);
  const [synonymDisplay, setSynonymDisplay] = useState(false);
  const [rhymeDisplay, setRhymeDisplay] = useState(false);

  return (
    <SafeArea>
      <HeadLogo>wordThing</HeadLogo>
      <InputBar
        setWordOutput={setWordOutput}
        setDefinitionDisplay={setDefinitionDisplay}
        setSynonymDisplay={setSynonymDisplay}
        setRhymeDisplay={setRhymeDisplay}
        wordOutput={wordOutput}
      />
      <Btn
        size={35}
        title="history"
        onPress={() => {
          navigation.navigate("History");
        }}
      />
      <WordSearchOutput word={wordOutput} />

      <DisplayContainer>
        {definitionDisplay && <DefinitionScreen word={wordOutput} />}
        {synonymDisplay && <SynonymScreen word={wordOutput} />}
        {rhymeDisplay && <RhymeScreen word={wordOutput} />}
      </DisplayContainer>
      <Footer>powered by Free Dictionary API and RhymeBrain</Footer>
    </SafeArea>
  );
};
