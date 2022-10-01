import React from "react";
import { View, Text } from "react-native";
import styled from "styled-components/native";

const Syllables = styled(Text)`
  color: ${(props) => props.theme.colors.text.primary};
  font-weight: ${(props) => props.theme.fontWeights.heavy};
  font-size: ${(props) => props.theme.fontSizes.body};
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
  console.log(output);
  return (
    <View>
      <Syllables>{syllables} syllable</Syllables>
      <Text>
        {output.map((obj) => {
          return <Text>{obj.word}, </Text>;
        })}
      </Text>
    </View>
  );
};
