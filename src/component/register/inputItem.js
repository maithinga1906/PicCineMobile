import React from 'react';
import { View, Text, TextInput } from 'react-native';
const InputItem = ({ value, styles, onChangeText }) => {
  return (
    <View>
      <Text>{value}</Text>
      <TextInput style={[{}, styles]} onChangeText={onChangeText} />
    </View>
  );
};

export default InputItem;
