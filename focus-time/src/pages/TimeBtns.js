import React from "react";
import { View, StyleSheet } from "react-native";
import { Btn } from "../components/Btn";

export function TimeBtns({ onChangeTime }) {

  return (
    <View style={styles.timeBtnCont}>
      <Btn size={75} title="10" onPress={()=>{onChangeTime(10)}}/>
      <Btn size={75} title="15" onPress={()=>{onChangeTime(15)}}/>
      <Btn size={75} title="25" onPress={()=>{onChangeTime(25)}}/>
    </View>
  );
}

const styles = StyleSheet.create({
    timeBtnCont:{
        flexDirection: "row",
        width: 300,
        justifyContent: "space-around"
    }
})
