import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { RecBtn, CircBtn, BorderRecBtn } from "./components/Btns";
import { colors } from "./themes";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>this is GrabRunner</Text>
      <StatusBar style="auto" />
      <RecBtn bgColor={colors.charcoal} title="hello" />
      <CircBtn bgColor={colors.charcoal} title="=" />
      <BorderRecBtn
        bgColor={colors.green}
        color={colors.white}
        size={100}
        title="i am 100"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lapis,
    alignItems: "center",
    justifyContent: "center",
  },
});
