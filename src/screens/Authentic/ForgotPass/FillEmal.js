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
  Image,
} from 'react-native';
import Images from '../../../themes/images';
import Color from '../../../themes/colors';
import Icons from '../../../themes/icons';
import TextInputComponent from '../../../component/textInputComponent';
const screenWidth = Dimensions.get('screen').width;

const FillEmal = () => {
  return (
    <View style={styles.container}>
      {/* <Image source={Icons.back} /> */}
      <View style={styles.logo}>
        <Image source={Images.logo} />
        <Text style={styles.title}>Quên mật khẩu</Text>
      </View>
      <View>
        <View style={styles.content}>
          <Text style={{ color: 'red' }}>*</Text>
          <Text>Vui lòng nhập email </Text>
        </View>
        <TextInputComponent Placeholder="Nhập email để nhận mã" />
      </View>

      <View style={{ width: screenWidth, alignItems: 'center', marginTop: 25 }}>
        <TouchableOpacity style={styles.login}>
          <Text style={styles.loginText}>Gửi</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FillEmal;

const styles = StyleSheet.create({
  icon: {
    borderColor: '#fc0b03',
  },
  logo: {
    alignItems: 'center',
    width: screenWidth,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: Color.title,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 16,
    bottom: -18,
    marginLeft: -110,
  },
  input: {
    width: screenWidth - 70,
    borderColor: '#3C574D',
    borderWidth: 2,
    borderRadius: 10,
    marginLeft: 10,
  },
  login: {
    width: screenWidth / 1.5,
    height: 45,
    borderColor: '#3C574D',
    borderWidth: 2,
    borderRadius: 30,
    backgroundColor: '#3C574D',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginText: {
    color: '#F4B9A7',
    fontWeight: 'bold',
    fontSize: 15,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
});
