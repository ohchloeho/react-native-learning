import React from "react";
import { View, Text } from "react-native";
import styled from "styled-components/native";

const SyllableCount = styled(Text)`
  color: ${(props) => props.theme.colors.text.primary};
  font-weight: ${(props) => props.theme.fontWeights.heavy};
  font-size: ${(props) => props.theme.fontSizes.title};
`;

const RhymesContainer = styled(Text)`
  margin-top: ${(props) => props.theme.marginSizes.sm};
`;

const RhymeWord = styled(Text)`
  color: ${(props) => props.theme.colors.text.primary};
  font-size: ${(props) => props.theme.fontSizes.body};
`;
const RhymeItemContainer = styled(View)`
  margin-bottom: ${(props) => props.theme.marginSizes.md};
`;

// dynamic sorting function

export const RhymeItem = ({ syllables, rhymeResults }) => {
  const output = rhymeResults
    .filter((rhyme) => {
      return rhyme.syllables === syllables && rhyme.score > 299;
    })
    .sort((a, b) => {
      if (a.word > b.word) {
        return "1";
      } else {
        return "-1";
      }
    });


  return (
    <RhymeItemContainer>
      <SyllableCount>{syllables} syllable</SyllableCount>
      <RhymesContainer>
        {output.map((obj) => {
          return <RhymeWord>{obj.word}, </RhymeWord>;
        })}
      </RhymesContainer>
    </RhymeItemContainer>
  );
};
