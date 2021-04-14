/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
import React, { Component } from "react";
import { StyleSheet, TextInput, Image, View, Dimensions } from "react-native";
const screenWidth = Dimensions.get("screen").width;
const TextInputComponent = (props) => {
  return (
    <View style={styles.username}>
      <Image source={props.icon} />
      <TextInput style={styles.input} placeholder={props.Placeholder} onChangeText={props.onChangeText}/>
    </View>
  );
};
export default TextInputComponent;
const styles = StyleSheet.create({
  input: {
    width: screenWidth - 70,
    borderColor: "#3C574D",
    borderWidth: 2,
    borderRadius: 10,
    marginLeft: 10,
  },
  username: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 35,
  },
});
