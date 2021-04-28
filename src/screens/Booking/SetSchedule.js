import React from 'react';
import { ScrollView, View, Text, Image, TextInput } from 'react-native';
import { Images } from '../../themes';

const SetSchedule = () => {
  return (
    <ScrollView>
      <View>
        <Text>Ten photograpper</Text>
        <Text>Ten style</Text>
        <Image source={Images.model1} />
      </View>
      <View>
        <TextInput />
      </View>
    </ScrollView>
  );
};
export default SetSchedule;
