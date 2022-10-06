import React, { useContext } from "react";
import { FlatList, View, ScrollView } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import { ContainerTitle } from "../components/containerTitle.component";
import styled from "styled-components/native";
import { RhymeContext } from "../services/rhymes/rhymes.context";
import { RhymeItem } from "../components/rhyme-data.component";

const RhymeContainer = styled(View)`
  align-items: center;
  position: relative;
  padding: ${(props) => props.theme.marginSizes.sm};
`;

const Loader = styled(ActivityIndicator)`
  margin-top: 140px;
  position: relative;
`;

const ScrollContainer = styled(ScrollView).attrs({
  contentContainerStyle: { width: 300 },
})`
  margin-bottom: ${(props) => props.theme.marginSizes.xl};
`;

export const RhymeScreen = (props) => {
  const { isLoading, rhymeResults } = useContext(RhymeContext);

  return (
    <RhymeContainer>
      {props.word !== "enter a word" && (
        <>
          {isLoading && <Loader size={40} animating={true} color="#8D432A" />}
          {!isLoading && (
            <>
              <ContainerTitle dataType="Rhymes" />
              <ScrollContainer>
                <RhymeItem rhymeResults={rhymeResults} syllables="1" />
                <RhymeItem rhymeResults={rhymeResults} syllables="2" />
                <RhymeItem rhymeResults={rhymeResults} syllables="3" />
              </ScrollContainer>
            </>
          )}
        </>
      )}
    </RhymeContainer>
  );
};
