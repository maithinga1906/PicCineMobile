/* eslint-disable no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  Dimensions,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';
import Images from '../../themes/images';
import Color from '../../themes/colors';
import Icons from '../../themes/icons';
import Swiper from 'react-native-swiper';
import Info from './Info';
const screenWidth = Dimensions.get('screen').width;

export default class Comment extends React.Component {
  render() {
    return (
      <ScrollView style={{ backgroundColor: 'white' }}>
        <Info />
        <View style={{ borderBottomColor: 'black', flexDirection: 'row' }}>
          <Image
            source={Images.model1}
            style={{
              width: 40,
              height: 40,
              borderRadius: 15,
              marginRight: 20,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          />
          <Text>Chụp hình rất đẹp vote 10*</Text>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({});
