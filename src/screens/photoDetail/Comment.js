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
      <ScrollView>
       <Info/>
      </ScrollView>
    );
  }
}
Comment.options = {
    topBar: {
      height: 0,
    },
  };

const styles = StyleSheet.create({});
