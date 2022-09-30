import React from "react";
import { View, Text, FlatList } from "react-native";
import styled from "styled-components/native";

const MeaningItemContainer = styled(View)`
  margin-bottom: ${(props) => props.theme.marginSizes.md};
`;

const DefinitionItemContainer = styled(View)`
  margin-bottom: ${(props) => props.theme.marginSizes.sm};
`;
const PartOfSpeech = styled(Text)`
  color: ${(props) => props.theme.colors.text.primary};
  font-weight: ${(props) => props.theme.fontWeights.heavy};
  font-size: ${(props) => props.theme.fontSizes.title};
`;
const DefinitionItem = styled(Text)`
  color: ${(props) => props.theme.colors.text.primary};
  font-size: ${(props) => props.theme.fontSizes.body};
  margin-top: ${(props) => props.theme.marginSizes.sm};
`;
const ExampleItem = styled(Text)`
  color: ${(props) => props.theme.colors.text.secondary};
  font-size: ${(props) => props.theme.fontSizes.button};
  font-style: italic;
`;

export const MeaningItem = ({ meaning }) => {
  // default destructured values
  const {
    partOfSpeech = "noun",
    definitions = [
      {
        definition: "used as a greeting or to begin a phone conversation.",
      },
    ],
  } = meaning;
  // meanings.map(meaning=> return meaning.partOfSpeech)

  return (
    <MeaningItemContainer>
      <PartOfSpeech>{partOfSpeech}</PartOfSpeech>
      <FlatList
        data={definitions}
        renderItem={({ item }) => {
          return (
            <DefinitionItemContainer>
              <DefinitionItem>{item.definition}</DefinitionItem>
              {item.example && <ExampleItem>"{item.example}"</ExampleItem>}
            </DefinitionItemContainer>
          );
        }}
      />
    </MeaningItemContainer>
  );
};
