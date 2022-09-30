import React from "react";
import { View, Text, FlatList } from "react-native";
import styled from "styled-components/native";

const SynonymItemContainer = styled(View)`
  margin-bottom: ${(props) => props.theme.marginSizes.md};
`;

const PartOfSpeech = styled(Text)`
  color: ${(props) => props.theme.colors.text.primary};
  font-weight: ${(props) => props.theme.fontWeights.heavy};
  font-size: ${(props) => props.theme.fontSizes.title};
`;
const Synonym = styled(Text)`
  font-size: ${(props) => props.theme.fontSizes.body};
  color: ${(props) => props.theme.colors.text.primary};
`;

export const SynonymItem = ({ synonymObj }) => {
  // default values
  const { partOfSpeech = "noun", synonyms = [] } = synonymObj;
  if (!synonyms.length) {
    return;
  }
  return (
    <SynonymItemContainer>
      <PartOfSpeech>{partOfSpeech}</PartOfSpeech>
      <FlatList
        data={synonyms}
        renderItem={({ item }) => {
          return <Synonym>{item}</Synonym>;
        }}
      />
    </SynonymItemContainer>
  );
};
