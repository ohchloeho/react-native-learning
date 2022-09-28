import React from "react";
import { View, FlatList, Text } from "react-native";
import { SafeArea } from "../components/safeArea.component";

export const DefinitionScreen = (props) => {
  return (
    <SafeArea>
      <Text>i'm a definition of {props.word}</Text>
    </SafeArea>
  );
};
