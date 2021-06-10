import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
const InputItem = ({ value, onChangeText }) => {
  return (
    <View>
      <View style={{ flexDirection: 'row' }}>
        <Text>{value}</Text>
        <Text style={{ color: 'red' }}>*</Text>
      </View>
      <View style={styles.textInput}>
        <TextInput style={styles.inputText} onChangeText={onChangeText} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  textInput: {
    marginTop: 10,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 5,
    borderRadius: 15,
    color: 'black',
    flexDirection: 'row',
  },
  inputText: {
    paddingLeft: 15,
    width: 200,
    color: 'black',
  },
});
export default InputItem;
