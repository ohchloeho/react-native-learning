import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { ProgressBar } from "react-native-paper";
import { colors, sizes } from "../themes";
import { Btn } from "../components/Btn";
import { CountDown } from "../components/CountDown";
import { TimeBtns } from "./TimeBtns";
import { useKeepAwake } from "expo-keep-awake";

export function Timer({ focusSubject, clearSubject, onTimerEnd }) {
  useKeepAwake(); // keeps app awake whenever Timer is running
  const [isStarted, setIsStarted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [minutes, setMinutes] = useState(10);

  return (
    <View style={styles.timerContainer}>
      <CountDown
        minutes={minutes}
        isPaused={!isStarted}
        onProgress={(progress) => {
          setProgress(progress);
        }}
        onEnd={(reset) => {
          setIsStarted(false);
          setProgress(1);
          reset();
          onTimerEnd(focusSubject);
        }}
      />
      <View style={styles.textCont}>
        <Text style={[styles.text, styles.h2]}>Focusing on:</Text>
        <Text style={styles.text}>{focusSubject}</Text>
      </View>
      <ProgressBar
        progress={progress}
        color={colors.onyx}
        style={styles.progress}
      />
      <View style={styles.btnsWrapper}>
        <View>
          <TimeBtns
            onChangeTime={(time) => {
              setMinutes(time);
            }}
          />
        </View>
        <View>
          {!isStarted && (
            <Btn
              title="start"
              onPress={() => {
                setIsStarted(true);
              }}
            />
          )}
          {isStarted && (
            <Btn
              title="pause"
              onPress={() => {
                setIsStarted(false);
              }}
            />
          )}
        </View>
        <View>
          <Btn size={50} title="-" onPress={clearSubject} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  timerContainer: {
    flex: 1,
    width: "100%",
    justifyContent: "space-around",
    alignItems: "center",
  },
  textCont: {
    flex: 0.2,
    alignItems: "center",
  },
  text: {
    color: colors.white,
    fontFamily: "AvenirNext-Medium",
    fontSize: sizes.md,
  },
  h2: {
    fontSize: sizes.lg,
    fontWeight: "600",
    marginTop: sizes.md,
  },
  progress: {
    height: 10,
    width: 375,
  },
  btnsWrapper: {
    flex: 0.7,
    alignItems: "center",
    justifyContent: "space-around",
  },
});
