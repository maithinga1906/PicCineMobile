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
import Screen404 from '../Screen404';
const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

const Wishlist = () => {
  return (
    <ScrollView style={{ backgroundColor: 'white' }}>
      <View>
        <Screen404 />
      </View>
    </ScrollView>
  );
};
export default Wishlist;

const styles = StyleSheet.create({
  item: {
    flex: 1,
    flexDirection: 'row',
    margin: 20,
  },
  itemImage: {
    width: screenWidth / 3,
    height: screenWidth / 3,
  },
  itemContent: {
    width: screenWidth / 2,
    height: screenWidth / 3,
    justifyContent: 'space-between',
    marginLeft: 20,
  },
  itemContentTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
