import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { colors } from "../utils/colors";

export function RoundBtn({ size = 125, ...props }) {
  return (
    <TouchableOpacity style={styles(size).radius} onPress={props.onPress}>
      <Text>{props.title}</Text>
    </TouchableOpacity>
  );
}

const styles = (size) => ({
  radius: {
    borderRadius: size / 2,
    width: size,
    height: size,
    alignItems: "center",
    justifyContent: "center",
    borderColor: colors.black,
    borderWidth: 2,
  },
  text: {
    color: colors.black,
    fontSize: size / 3,
  },
});
