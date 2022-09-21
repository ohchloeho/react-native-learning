import React, { useState } from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { FocusInput } from "./pages/FocusInput";
import { Timer } from "./pages/Timer";
import { colors, sizes } from "./themes";
import { FocusHistory } from "./pages/FocusHistory";

export default function App() {
  const [currentSubject, setCurrentSubject] = useState(null);
  const [history, setHistory] = useState([]);

  
  return (
    <SafeAreaView style={styles.container}>
      <Text style={[styles.h1, styles.text]}>focusTime</Text>
      {currentSubject ? (
        <Timer
          focusSubject={currentSubject}
          clearSubject={() => {
            setCurrentSubject(null);
          }}
          onTimerEnd={(subject) => {
            setHistory([...history, subject]);
          }}
        />
      ) : (
        <>
          <FocusInput addSubject={setCurrentSubject} />
          <FocusHistory history={history} />
        </>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lapis,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  h1: {
    fontSize: sizes.xl,
    margin: sizes.sm,
  },
  text: {
    color: colors.white,
    fontFamily: "AvenirNext-Medium",
  },
});
