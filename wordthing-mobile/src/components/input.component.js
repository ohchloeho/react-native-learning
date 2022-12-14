import React, { useState, useContext } from "react";
import { TextInput, View } from "react-native";
import { Btn } from "../components/button.component";
import styled from "styled-components/native";
import { DefinitionContext } from "../services/definitions/definition.context";
import { RhymeContext } from "../services/rhymes/rhymes.context";

const InputCont = styled(View)`
  flex-direction: column;
  flex: 0.18;
  width: 350px;
  justify-content: space-between;
  align-items: center;
`;

const BtnContainer = styled(View)`
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;

const Input = styled(TextInput)`
  border: 2px solid ${(props) => props.theme.colors.text.primary};
  border-radius: ${(props) => props.theme.marginSizes.md};
  padding: ${(props) => props.theme.marginSizes.sm};
  flex: 0.9;
  width: 100%;
  color: ${(props) => props.theme.colors.text.primary};
`;

export const InputBar = ({
  setWordOutput,
  setDefinitionDisplay,
  setSynonymDisplay,
  setRhymeDisplay,
  wordOutput,
}) => {
  const { search, wordSearch } = useContext(DefinitionContext);
  const { searchRhymes } = useContext(RhymeContext);
  const [searchWord, setSearchWord] = useState("");

  return (
    <InputCont>
      <Input
        placeholder="search.."
        onChangeText={(word) => {
          setSearchWord(word);
        }}
        value={searchWord}
      />
      <BtnContainer>
        <Btn
          size={40}
          title="definition"
          onPress={() => {
            setDefinitionDisplay(true);
            setSynonymDisplay(false);
            setRhymeDisplay(false);
            if (searchWord.length && wordOutput.length) {
              setWordOutput(searchWord);
              search(searchWord);
              searchRhymes(searchWord);
              setSearchWord("");
            }
          }}
        />
        <Btn
          size={40}
          title="synonym"
          onPress={() => {
            setSynonymDisplay(true);
            setDefinitionDisplay(false);
            setRhymeDisplay(false);
            if (searchWord.length && wordOutput.length) {
              setWordOutput(searchWord);
              search(searchWord);
              searchRhymes(searchWord);
              setSearchWord("");
            }
          }}
        />
        <Btn
          size={40}
          title="rhyme"
          onPress={() => {
            setSynonymDisplay(false);
            setDefinitionDisplay(false);
            setRhymeDisplay(true);
            if (searchWord.length && wordOutput.length) {
              setWordOutput(searchWord);
              search(searchWord);
              searchRhymes(searchWord);
              setSearchWord("");
            }
          }}
        />
      </BtnContainer>
    </InputCont>
  );
};
