import React, { useContext } from "react";
import { Text, View, FlatList } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import { ContainerTitle } from "../components/containerTitle.component";
import { DefinitionContext } from "../services/definitions/definition.context";
import { MeaningItem } from "../components/definition-data.component";
import styled from "styled-components/native";

const DefinitionContainer = styled(View)`
    border: 2px solid ${(props) => props.theme.colors.text.primary};
    border-radius: 10px;
    flex: 0.7;
    width: 350px;
    padding: ${(props) => props.theme.marginSizes.md}
    align-items:center;
    position: relative;
`;
const DefinitionList = styled(FlatList).attrs({
  contentContainerStyle: { padding: 8, width: 375 },
})`
    overflow: scroll;
`;

const Loader = styled(ActivityIndicator)`
  margin-top: 90px;
  position: relative;
`;

export const DefinitionScreen = (props) => {
  const { isLoading, definitions } = useContext(DefinitionContext);
  console.log(definitions.meanings);

  return (
    <DefinitionContainer>
      <ContainerTitle dataType="Definition" />
      {isLoading && <Loader size={40} animating={true} color="#8D432A" />}
      {!isLoading && (
        <>
          <Text>i'm a definition of {props.word.toLowerCase()}</Text>
          <DefinitionList 
          data={definitions.meanings}
          renderItem = {({item})=>{
            return <MeaningItem meaning={item}/>
          }}
          />
        </>
      )}
    </DefinitionContainer>
  );
};
