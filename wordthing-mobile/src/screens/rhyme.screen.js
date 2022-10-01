import React, { useContext } from "react";
import { FlatList, View } from "react-native";
import { ContainerTitle } from "../components/containerTitle.component";
import styled from "styled-components/native";
import { RhymeContext } from "../services/rhymes/rhymes.context";
import { RhymeItem } from "../components/rhyme-data.component";

const RhymeContainer = styled(View)`
  align-items: center;
  position: relative;
  padding: ${(props) => props.theme.marginSizes.sm};
`;

export const RhymeScreen = () => {
  const { isLoading, rhymeResults } = useContext(RhymeContext);

  return (
    <RhymeContainer>
      <ContainerTitle dataType="Rhymes" />
        <RhymeItem rhymeResults={rhymeResults} syllables="1"/>
    </RhymeContainer>
  );
};
