import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { colors, sizes } from "../themes";

// rectangular btn w/o borders
export function RecBtn({ size = 125, ...props }) {
  return (
    <TouchableOpacity
      style={[styles(size).recBtn, { backgroundColor: props.bgColor }]}
    >
      <Text style={styles(size).recBtnText}>{props.title}</Text>
    </TouchableOpacity>
  );
}

// circular button w/o borders
export function CircBtn({ size = 80, ...props }) {
  return (
    <TouchableOpacity
      style={[styles(size).circBtn, { backgroundColor: props.bgColor }]}
    >
      <Text style={styles(size).circBtnText}>{props.title}</Text>
    </TouchableOpacity>
  );
}

export function BorderRecBtn({ size = 125, ...props }) {
  return (
    <TouchableOpacity
      style={[
        styles(size).borderRecBtn,
        { borderColor: props.color, backgroundColor: props.bgColor },
      ]}
    >
      <Text style={[styles(size).recBtnText, { color: props.color }]}>
        {props.title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = (size) => ({
  recBtnText: {
    fontFamily: "Futura",
    color: colors.white,
    fontSize: size / 8,
  },
  recBtn: {
    borderRadius: sizes.sm,
    width: size,
    height: size / 3,
    alignItems: "center",
    justifyContent: "center",
  },
  circBtnText: {
    fontFamily: "Futura",
    color: colors.white,
    fontSize: size / 5,
  },
  circBtn: {
    alignItems: "center",
    justifyContent: "center",
    width: size / 2,
    height: size / 2,
    borderRadius: size / 4,
  },
  borderRecBtn: {
    borderWidth: size / 70,
    borderRadius: sizes.sm,
    width: size,
    height: size / 3,
    alignItems: "center",
    justifyContent: "center",
  },
});
