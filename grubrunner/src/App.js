import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { RecBtn, CircBtn } from "./components/Btns";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>this is GrabRunner</Text>
      <StatusBar style="auto" />
      <RecBtn />
      <CircBtn/>
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
