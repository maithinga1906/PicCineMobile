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
const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;


export default class Wishlist extends React.Component {
  render() {
    return (
      <ScrollView style={{backgroundColor: 'white'}}>
        <View style={styles.item}>
          <Image source={Images.nag1} style={styles.itemImage} />
          <View style={styles.itemContent}>
            <View>
              <Text style={styles.itemContentTitle}>Nguyễn Văn Hùng</Text>
              <Text>Làm việc: T2-CN</Text>
            </View>
            <Image source={Icons.wishlist} />
          </View>
        </View>

        <View style={styles.item}>
          <Image source={Images.nag1} style={styles.itemImage} />
          <View style={styles.itemContent}>
            <View>
              <Text style={styles.itemContentTitle}>Nguyễn Văn Hùng</Text>
              <Text>Làm việc: T2-CN</Text>
            </View>
            <Image source={Icons.wishlist} />
          </View>
        </View>

        <View style={styles.item}>
          <Image source={Images.nag1} style={styles.itemImage} />
          <View style={styles.itemContent}>
            <View>
              <Text style={styles.itemContentTitle}>Nguyễn Văn Hùng</Text>
              <Text>Làm việc: T2-CN</Text>
            </View>
            <Image source={Icons.wishlist} />
          </View>
        </View>

        <View style={styles.item}>
          <Image source={Images.nag1} style={styles.itemImage} />
          <View style={styles.itemContent}>
            <View>
              <Text style={styles.itemContentTitle}>Nguyễn Văn Hùng</Text>
              <Text>Làm việc: T2-CN</Text>
            </View>
            <Image source={Icons.wishlist} />
          </View>
        </View>

        <View style={styles.item}>
          <Image source={Images.nag1} style={styles.itemImage} />
          <View style={styles.itemContent}>
            <View>
              <Text style={styles.itemContentTitle}>Nguyễn Văn Hùng</Text>
              <Text>Làm việc: T2-CN</Text>
            </View>
            <Image source={Icons.wishlist} />
          </View>
        </View>

        <View style={styles.item}>
          <Image source={Images.nag1} style={styles.itemImage} />
          <View style={styles.itemContent}>
            <View>
              <Text style={styles.itemContentTitle}>Nguyễn Văn Hùng</Text>
              <Text>Làm việc: T2-CN</Text>
            </View>
            <Image source={Icons.wishlist} />
          </View>
        </View>
      </ScrollView>
    );
  }
}
Wishlist.options = {
  topBar: {
    title: {
      text: 'Yêu Thích',
      color: 'black',
    },
    background: {
      color: Color.background,
    },
    backButton: {
      visible: true,
    },
  },
};

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
