import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Btn } from "../components/Btn";
import { colors } from "../themes";

export function ColorChanger({ setAppBGColor }) {
  return (
    <View style={styles.colorContainer}>
      <Btn
        size={75}
        color={colors.lapis}
        onPress={() => {
          setAppBGColor(colors.lapis);
        }}
      />
      <Btn
        size={75}
        color={colors.green}
        onPress={() => {
          setAppBGColor(colors.green);
        }}
      />
      <Btn
        size={75}
        color={colors.wine}
        onPress={() => {
          setAppBGColor(colors.wine);
        }}
      />
      <Btn
        size={75}
        color={colors.onyx}
        onPress={() => {
          setAppBGColor(colors.onyx);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  colorContainer: {
    flex: 0.8,
    flexDirection: "row",
    width: "90%",
    marginTop: "90%",
    justifyContent: "space-around",
  },
});
