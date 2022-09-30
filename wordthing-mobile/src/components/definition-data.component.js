import React from "react";
import { View, Text, FlatList } from "react-native";
import styled from "styled-components/native";

const MeaningList = styled(FlatList)``;

export const MeaningItem = ({ meaning }) => {
  // default destructured values
  const {
    partOfSpeech = "noun",
    definitions = [
      {
        definition: "used as a greeting or to begin a phone conversation.",
        example: "hello there, Katie!",
      },
    ],
  } = meaning;
  // meanings.map(meaning=> return meaning.partOfSpeech)

  return (
    <View>
      <Text>{partOfSpeech}</Text>
      <MeaningList
        data={definitions}
        renderItem={({ item }) => {
          return (
            <>
              <Text>{item.definition}</Text>
              <Text>{item.example}</Text>
            </>
          );
        }}
      />
    </View>
  );
};
