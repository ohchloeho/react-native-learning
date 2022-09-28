import React, { useState } from "react";
import { TextInput, View } from "react-native";
import { Btn } from "../components/button.component";
import styled from "styled-components/native";

const InputCont = styled(View)`
  flex-direction: row;
  flex: 0.1;
  width: 350px;
  justify-content: space-between;
  align-items: center;
`;

const Input = styled(TextInput)`
  border: 2px solid ${(props) => props.theme.colors.text.primary};
  border-radius: ${(props) => props.theme.marginSizes.md};
  padding: ${(props) => props.theme.marginSizes.sm};
  flex: 0.95;
  color: ${(props) => props.theme.colors.text.primary};
`;

export const InputBar = ({ setWordOutput }) => {
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
      <Btn
        size={40}
        title="go"
        onPress={() => {
          if (searchWord.length) {
            setWordOutput(searchWord);
          }
        }}
      />
    </InputCont>
  );
};
