import React, { useState } from "react";
import { Btn } from "../components/button.component";
import { HeadLogo, Footer, DisplayContainer } from "./styles";
import { SafeArea } from "../components/safeArea.component";
import { FlatList, Text } from "react-native";
import { ScreenTitle } from "./styles";
import styled from "styled-components/native";

const HistoryList = styled(FlatList)``;

export const HistoryScreen = ({ navigation }) => {
  const [historyLog, setHistoryLog] = useState([
    // default history objects
    {
      word: "hello",
      date: new Date().toDateString(),
    },
    {
      word: "confidence",
      date: new Date().toDateString(),
    },
  ]);
  return (
    <SafeArea>
      <HeadLogo>wordThing</HeadLogo>
      <Btn
        size={30}
        title="back"
        onPress={() => {
          navigation.navigate("Word_Function");
        }}
      />
      <ScreenTitle>history log</ScreenTitle>
      <DisplayContainer>
        <HistoryList
          data={historyLog}
          renderItem={({ item }) => {
            return (
              <Text>
                {item.word}:{item.date} x
              </Text>
            );
          }}
        />
      </DisplayContainer>
      <Footer>powered by FireBase and React Native</Footer>
    </SafeArea>
  );
};
