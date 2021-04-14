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
  BackHandler,
} from 'react-native';
import Images from '../../themes/images';
import Color from '../../themes/colors';
import Icons from '../../themes/icons';
const screenWidth = Dimensions.get('screen').width;

export default class Detail extends React.Component {
  render() {
    return (
      <ScrollView style={{backgroundColor: 'white'}}>
        <Image source={Images.model1} style={styles.image} />

        <View style={styles.info}>
          <Text>100.000/ giờ</Text>
          <Text>Chụp tại studio / ngoại cảnh</Text>
        </View>

        <View style={styles.detail}>
          <View style={styles.nag}>
            <Image source={Images.nag2} style={styles.imageNag} />
            <Text style={styles.nameNag}>Moon Thuc</Text>
          </View>
          <View style={styles.detail1}>
            <Text style={styles.status}>
              "Chụp ảnh Cổ phong FunaGo Travel Ngũ Hành Sơn Đà Nẵng ."
            </Text>
            <Image source={Images.model2} style={styles.demo} />
          </View>
        </View>
      </ScrollView>
    );
  }
}
Detail.options = {
  topBar: {
    title: {
      text: 'Chup hinh co phong',
      color: 'black',
    },
    backButton: {
      //55
      id: 'BACK',
      //55
      visible: true,
    },
  },
};

const styles = StyleSheet.create({
  image: {
    width: screenWidth,
    height: screenWidth,
  },
  info: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Color.background,
  },
  nag: {
    flexDirection: 'row',
	alignItems: 'center',
	marginLeft: 40,
  },
  imageNag: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  nameNag: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  demo: {
    height: screenWidth / 1.5,
    width: screenWidth / 1.5,
  },
  detail1: {
    alignItems: 'center',
  },
  detail: {
	width: screenWidth - 50,
	height: screenWidth + 50,
	backgroundColor: '#EDE7E7',
  },
  status: {
	alignItems: 'center',
	textAlign: 'center'
  },
});
