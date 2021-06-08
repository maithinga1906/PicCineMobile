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

const Comment = () => {
  return (
    <ScrollView>
      <Info />
    </ScrollView>
  );
};
export default Comment;

const styles = StyleSheet.create({});
