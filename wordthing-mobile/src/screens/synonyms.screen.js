import React, { useContext } from "react";
import { View, FlatList } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import { ContainerTitle } from "../components/containerTitle.component";
import { DefinitionContext } from "../services/definitions/definition.context";
import { SynonymItem } from "../components/synonym-item.component";
import styled from "styled-components/native";

const SynonymContainer = styled(View)`
  align-items: center;
  position: relative;
  padding: ${(props) => props.theme.marginSizes.sm};
`;
const Loader = styled(ActivityIndicator)`
  margin-top: 140px;
  position: relative;
`;
const SynonymList = styled(FlatList).attrs({
  contentContainerStyle: { width: 300 },
})`
  margin-bottom: ${(props) => props.theme.marginSizes.xl};
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
                  return <SynonymItem synonymObj={item} />;
                }}
              />
            </>
          )}
        </>
      )}
    </SynonymContainer>
  );
};
