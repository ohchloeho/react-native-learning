import React, { useContext } from "react";
import { View, FlatList } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import { ContainerTitle } from "../components/containerTitle.component";
import { DefinitionContext } from "../services/definitions/definition.context";
import { MeaningItem } from "../components/definition-data.component";
import styled from "styled-components/native";

const DefinitionContainer = styled(View)`
    align-items:center;
    position: relative; 
    padding: ${(props) => props.theme.marginSizes.sm};
`;
const DefinitionList = styled(FlatList).attrs({
  contentContainerStyle: { padding: 8, width: 300 },
})`
  overflow: scroll;
`;

const Loader = styled(ActivityIndicator)`
  margin-top: 90px;
  position: relative;
`;

export const DefinitionScreen = (props) => {
  const { isLoading, results } = useContext(DefinitionContext);

  return (
    <DefinitionContainer>
      {props.word !== "enter a word" && (
        <>
          {isLoading && <Loader size={40} animating={true} color="#8D432A" />}
          {!isLoading && (
            <>
              <ContainerTitle dataType="Definitions" />
              <DefinitionList
                data={results.meanings}
                renderItem={({ item }) => {
                  return <MeaningItem meaning={item} />;
                }}
              />
            </>
          )}
        </>
      )}
    </DefinitionContainer>
  );
};
