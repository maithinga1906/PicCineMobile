/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Icons from '../../themes/icons';
const QR = () => {
  return (
    <View style={{backgroundColor: 'white'}}>
      <Image style={styles.logo} source={Icons.camera} />
    </View>
  );
};
export default QR;
const styles = StyleSheet.create({
  logo: {
    alignItems: 'center',
  },
});
