import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { colors, sizes } from "./utils/themes";

export default function App() {
  //function for randomHexcodes generation
  const hexCharArr = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    0,
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
  ];
  const randomHexCodes = () => {
    let ranHexString = "#";
    for (let x = 0; x < 6; x++) {
      let charIndex = Math.floor(Math.random() * 16);
      ranHexString += hexCharArr[charIndex];
    }
    return ranHexString;
  };
  const [boxColor1, setBoxColor1] = useState("");
  const [boxColor2, setBoxColor2] = useState("");
  const [boxColor3, setBoxColor3] = useState("");
  const [boxColor4, setBoxColor4] = useState("");

  const generateColorHandler = () => {
    setBoxColor1(randomHexCodes())
    setBoxColor2(randomHexCodes())
    setBoxColor3(randomHexCodes())
    setBoxColor4(randomHexCodes())
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <Text style={styles.heading}>color generator</Text>

      <View style={styles.colorCont}>
        <View style={[styles.colorItem, { backgroundColor: boxColor1}]}>
          <Text style={styles.text}>{boxColor1}</Text>
        </View>
        <View
          style={[styles.colorItem, { backgroundColor: boxColor2 }]}
        ><Text style={styles.text}>{boxColor2}</Text></View>
        <View
          style={[styles.colorItem, { backgroundColor: boxColor3 }]}
        ><Text style={styles.text}>{boxColor3}</Text></View>
        <View
          style={[styles.colorItem, { backgroundColor: boxColor4 }]}
        ><Text style={styles.text}>{boxColor4}</Text></View>
      </View>

      <TouchableOpacity
        style={styles.buttonWrapper}
        onPress={generateColorHandler}
      >
        <Text style={styles.text}>Press to generate colors!</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: "center",
  },
  heading: {
    marginTop: sizes.sm,
    fontSize: sizes.xl,
    fontFamily: "Futura",
  },
  text: {
    fontFamily: "Futura",
    backgroundColor: colors.black,
    color: colors.white,
  },
  colorCont: {
    marginTop: sizes.sm,
    flex: 0.8,
    width: "100%",
    backgroundColor: colors.black,
  },
  colorItem: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonWrapper: {
    flex: 0.2,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.black,
    width: "100%",
  },
});
