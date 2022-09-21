import React, { useState } from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { FocusInput } from "./pages/FocusInput";
import { Timer } from "./pages/Timer";
import { colors, sizes } from "./themes";
import { FocusHistory } from "./pages/FocusHistory";
import { Btn } from "./components/Btn";
import { ColorChanger } from "./pages/ColorChanger";

export default function App() {
  const [currentSubject, setCurrentSubject] = useState(null);
  const [history, setHistory] = useState([]);
  const [colorChanger, setColorChanger] = useState(false);
  const [appBGColor, setAppBGColor] = useState(colors.lapis);

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: appBGColor }]}>
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
          {!colorChanger && (
            <View style={styles.colorBtnWrapper}>
              <Btn
                size={80}
                title="color"
                onPress={() => {
                  setColorChanger(true);
                }}
              />
            </View>
          )}
          {colorChanger && (
            <>
              <ColorChanger
                setAppBGColor={(subject) => {
                  setAppBGColor(subject);
                  console.log(subject);
                }}
              />
              <Btn
                size={75}
                title="close"
                onPress={() => {
                  setColorChanger(false);
                }}
              />
            </>
          )}
        </>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  colorBtnWrapper: {
    marginTop: "100%",
  },
});
