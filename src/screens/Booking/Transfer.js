/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
  Dimensions,
  TextInput,
  ScrollView,
} from 'react-native';
import TextInputComponent from '../../component/textInputComponent';
import Icons from '../../themes/icons';
const screenWidth = Dimensions.get('screen').width;
const Transfer = () => {
  const [text, onChangeText] = React.useState(null);

  return (
    <ScrollView>
      <View
        style={{
          marginLeft: 15,
          marginRight: 15,
          marginBottom: 15,
          marginTop: 15,
          backgroundColor: 'white',
        }}
      >
        <View style={styles.content}>
          <Image source={require('../../assets/Images/icon/momo.png')} />
          <View>
            <Text style={styles.title}>Ví MoMo</Text>
            <Text style={styles.txt}>Bạn phải có tài khoản MoMo</Text>
          </View>
        </View>
        <View horizontal={true} style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'center'}}>
          <View style={styles.content1}>
            <Text style={{ fontSize: 16, textAlign: 'center' }}>
              Giảm <Text style={{ color: 'yellow' }}>25%</Text> khi thành toán
              Online{' '}
            </Text>
          </View>
          <View style={styles.content1}>
            <Text style={{ fontSize: 16, textAlign: 'center' }}>
              Có cơ hội trợ thành khách hàng Vip
            </Text>
          </View>
        </View>
        <View style={styles.content}>
          <Image source={require('../../assets/Images/icon/money.png')} />
          <View>
            <Text style={styles.title}>Thành toán tiền mặt</Text>
            <Text style={styles.txt}>Thành toán khi đã chụp ảnh</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
export default Transfer;
const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  txt: {
    lineHeight: 31,
    fontSize: 16,
    color: 'black',
  },
  content1: {
    backgroundColor: '#F4B9A7',
    height: 60,
    justifyContent: 'center',
    width: screenWidth / 2.5,
    margin: 5,
    borderColor: '#F2DB06',
    borderWidth: 1,
  },
  content: {
    paddingTop: 5,
    paddingBottom: 5,
    flexDirection: 'row',
    borderColor: '#DEB9B9',
    borderWidth: 1,
    paddingLeft: 5,
  },
});
