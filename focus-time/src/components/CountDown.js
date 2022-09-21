import React, { useEffect, useRef, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { colors, sizes } from "../themes";

//functions for visual aspects
const minToMs = (min) => min * 60 * 1000;
const formatTime = (time) => (time < 10 ? `0${time}` : time);

export function CountDown({ minutes = 10, isPaused, onProgress, onEnd }) {
  const interval = React.useRef(null);
  const [millis, setMillis] = useState(null);

  //reset function, passed to line 21 onEnd() so output returns to starting values when it ends
  const reset = () => setMillis(minToMs(minutes));

  //countdown function
  const countDown = () => {
    setMillis((time) => {
      if (time === 0) {
        clearInterval(interval.current);
        onEnd(reset);
        return time;
      } else {
        //counts down if millis > 0
        const timeLeft = time - 1000;
        return timeLeft;
      }
    });
  };

  // change millis on minutes input
  useEffect(() => {
    setMillis(minToMs(minutes));
  }, [minutes]);

  // change progress according to millis change
  useEffect(() => {
    onProgress(millis / minToMs(minutes));
  }, [millis]);

  // pause countDown when isPaused is true
  useEffect(() => {
    if (isPaused) {
      if (interval.current) clearInterval(interval.current);
      return;
    }
    interval.current = setInterval(countDown, 1000);
    return () => {
      clearInterval(interval.current);
    };
  }, [isPaused]);

  //output variables
  const minuteOutput = Math.floor(millis / 60 / 1000) % 60;
  const secondOutput = Math.floor(millis / 1000) % 60;

  return (
    <Text style={styles.text}>
      {formatTime(minuteOutput)}:{formatTime(secondOutput)}
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    textAlign: "center",
    fontSize: sizes.xxxl * 1.2,
    fontWeight: "600",
    fontFamily: "AvenirNext-Medium",
    color: colors.white,
    backgroundColor: colors.onyx,
    borderWidth: sizes.sm,
    borderColor: colors.charcoal,
    borderRadius: sizes.lg,
    overflow: "hidden",
    paddingHorizontal: sizes.lg,
  },
});
