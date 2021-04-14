/* eslint-disable no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { useState } from 'react';

import { Text, View, TouchableOpacity, StyleSheet, Image, Dimensions, TextInput, ScrollView } from 'react-native';
import TextInputComponent from '../../component/textInputComponent';
import Icons from '../../themes/icons';
import Images from '../../themes/images';
const screenWidth = Dimensions.get('screen').width;
const Payment = () => {
  const [text, onChangeText] = React.useState(null);

  return (
    <ScrollView>
      <View style={{ marginLeft: 15, marginRight: 15, marginBottom: 15, backgroundColor: 'white', }}>
        <View style={styles.section}>
          <View style={styles.content}>
            <Image style={styles.img} source={Images.nag1} />
            <View style={{ paddingLeft: 10 }}>
              <Text style={styles.title}>Môn Thúc</Text>
              <Text style={styles.txt}>Chụp ảnh cổ phong </Text>
              <Text style={styles.txtPrice}> 100.000đ/giờ</Text>
              <View style={styles.small_content}>
                <Text style={styles.txt}>Thời gian:</Text>
                <Text style={styles.txtTime}> 23/03/2021</Text>
              </View>
              <View style={styles.small_content}>
                <Text style={styles.txt}>Bắt đầu từ:</Text>
                <Text style={styles.txtTime}> 9:00 đến 12:00</Text>
              </View>
            </View>
          </View>
          <View style={styles.small_content}>
            <Text style={styles.txt}>Địa điểm: </Text>
            <Text style={styles.txtTime}>Bán đảo Sơn Trà, Đà Nẵng</Text>
          </View>
        </View>
        <View style={styles.section}>
          <Text style={styles.txtPrice}>Tổng giá tiền: 300.000 đ</Text>
        </View>
        <View style={styles.section}>
          <View style={styles.small_content}>
            <Text style={styles.title}>Thông tin liên hệ </Text>
            <Image style={{ color: 'red', marginLeft: 140 }} source={Icons.pen} />
          </View>
          <View style={styles.small_content}>
            <Text style={styles.txt}>Tên:</Text>
            <Text style={styles.txtTime}>  Any Hạ</Text>
          </View>
          <View style={styles.small_content}>
            <Text style={styles.txt}>Số điện thoại:</Text>
            <Text style={styles.txtTime}> 086 887 9876 </Text>
          </View>
        </View>
        <View style={styles.section}>
          <Text style={styles.title}>Phương thức thành toán</Text>
          <View style={styles.small_content}>
            <TouchableOpacity style={{flexDirection:'row'}}>
              <Text style={styles.txt}>Vui lòng chọn phương thức thành toán </Text>
              <Image source={Icons.next} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.promotion}>
          <Text style={{ color: '#2BA8C3', fontSize: 16 }}>Mã giảm giá </Text>
          <TextInput style={{ backgroundColor: '#C4C4C4', margin: 15, width: screenWidth / 1.8 }} placeholder="Nhập mã giảm giá" />
        </View>
        <View style={styles.small_content}>
          <Text style={styles.txt}>Tổng thành toán</Text>
          <Text style={styles.txtPrice}>        300.000đ</Text>
        </View>
        <TouchableOpacity style={styles.btn_set}>
          <Text style={styles.txtb}>Thành toán</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
export default Payment;
const styles = StyleSheet.create({
  small_content: { flexDirection: 'row' },
  promotion: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: '#A64244',
    borderBottomWidth: 1,
  },
  txtPrice: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 16,
    lineHeight: 31,
  },
  attent: {
    color: 'red',
    fontSize: 16,
    lineHeight: 31,
    textAlign: 'left',
  },
  section: {
    borderBottomColor: '#A64244',
    borderBottomWidth: 1,
    paddingBottom: 15,
    marginTop: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  img: {
    width: screenWidth / 4,
    height: 135,
    borderRadius: 5,
  },
  content: {
    flexDirection: 'row',
    padding: 10,
    paddingBottom: 15,
  },

  btn_set: {
    height: 45,
    borderColor: '#3C574D',
    borderWidth: 2,
    borderRadius: 5,
    backgroundColor: '#3C574D',
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtTime: {
    lineHeight: 31,
    fontSize: 16,
    color: 'black',
  },
  txt: {
    lineHeight: 31,
    fontSize: 16,
    color: '#2BA8C3',
  },
  txtb: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
