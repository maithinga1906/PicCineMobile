import React from 'react';
import { View, Text, TextInput } from 'react-native';
const InputItem = ({ value, styles, onChangeText }) => {
  return (
    <View>
      <View style={{flexDirection: 'row'}}>
        <Text>{value}</Text>
        <Text style={{color: 'red'}}>*</Text>
      </View>

      <TextInput style={[{}, styles]} onChangeText={onChangeText} />
    </View>
  );
};

export default InputItem;
