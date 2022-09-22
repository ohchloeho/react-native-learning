import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { RecBtn, CircBtn } from "./components/Btns";
import { colors } from "./themes";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>this is GrabRunner</Text>
      <StatusBar style="auto" />
      <RecBtn bgColor={colors.charcoal}/>
      <CircBtn bgColor={colors.charcoal}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
