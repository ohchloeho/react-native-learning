import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { colors } from "../utils/colors";
import { spacing, fontSizes } from "../utils/sizes";
import { RoundBtn } from "./RoundBtn";

export function TaskCont({ taskName, taskDelete }) {
  return (
      <Text style={styles.taskText}>{taskName}</Text>
  );
}

const styles = StyleSheet.create({
  taskText: {
    fontSize: fontSizes.md,
  },
});
