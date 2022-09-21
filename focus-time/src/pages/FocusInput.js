import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { colors, sizes } from "../themes";
import { Btn } from "../components/Btn";

export function FocusInput({ addSubject }) {
  const [text, setText] = useState(null);
  const [error, setError] = useState(false);
  return (
    <View>
      {error ? (
        <Text style={styles.text}>please let me know what to focus on!</Text>
      ) : (
        <Text style={styles.text}>what would you like to focus on?</Text>
      )}

      <View style={styles.textInputCont}>
        <TextInput
          style={[styles.text, styles.textInput]}
          onChangeText={setText}
        />
        <Btn
          title="+"
          size={25}
          onPress={() => {
            if (text) {
              addSubject(text);
              setError(false);
            } else {
              setError(true);
            }
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: colors.white,
    fontFamily: "AvenirNext-Medium",
  },
  textInput: {
    width: "80%",
    marginTop: sizes.sm,
  },
  textInputCont: {
    width: "70%",
    paddingBottom: sizes.sm,
    borderBottomWidth: 2,
    borderBottomColor: colors.white,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
});
