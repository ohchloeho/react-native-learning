import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { colors, sizes } from "../themes";

export function FocusHistory({ history }) {
  if (!history || !history.length)
    return;

  //define render for flatlist
  const renderItem = ({ item }) => <Text style={styles.text}>{item}</Text>;

  return (
    <View style={styles.container}>
      <Text style={[styles.h2, styles.text]}>focus history </Text>
      <FlatList data={history} renderItem={renderItem} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  h2: {
    fontSize: sizes.lg,
    marginTop: sizes.xl,
  },
  text: {
    color: colors.white,
    fontFamily: "AvenirNext-Medium",
    textAlign: "center",
  },
});
