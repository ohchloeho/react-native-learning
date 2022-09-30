import React, { useContext } from "react";
import { View, FlatList, Text } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import { ContainerTitle } from "../components/containerTitle.component";
import { DefinitionContext } from "../services/definitions/definition.context";
import { SynonymItem } from "../components/synonym-item.component";
import styled from "styled-components/native";

const SynonymContainer = styled(View)`
    border: 2px solid ${(props) => props.theme.colors.text.primary};
    border-radius: 10px;
    flex: 0.8;
    width: 350px;
    padding: ${(props) => props.theme.marginSizes.md}
    align-items:center;
    position: relative; 
`;
const Loader = styled(ActivityIndicator)`
  margin-top: 90px;
  position: relative;
`;
const SynonymList = styled(FlatList).attrs({
  contentContainerStyle: { padding: 8, width: 315 },
})`
  overflow: scroll;
`;

export const SynonymScreen = (props) => {
  const { isLoading, results } = useContext(DefinitionContext);

  return (
    <SynonymContainer>
      {props.word !== "enter a word" && (
        <>
          {isLoading && <Loader size={40} animating={true} color="#8D432A" />}
          {!isLoading && (
            <>
              <ContainerTitle dataType="Synonyms" />
              <SynonymList
                data={results.meanings}
                renderItem={({ item }) => {
                  return <SynonymItem synonymObj={item}/>;
                }}
              />
            </>
          )}
        </>
      )}
    </SynonymContainer>
  );
};
