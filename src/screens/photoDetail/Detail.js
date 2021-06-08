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
import { Navigation } from 'react-native-navigation';
import { Colors } from '../../themes';
const screenWidth = Dimensions.get('screen').width;

const Detail = (props) => {
  const onBooking = () => {
    Navigation.push(props.componentId, {
      component: {
        name: 'SetSchedule',
        passProps: {
          photographer: props.photo,
          category: props.category,
        },
        options: {
          topBar: {
            visible: true,
            title: {
              text: 'Đặt lịch',
              alignment: 'center',
            },
          },
        },
      },
    });
  };
  return (
    <ScrollView style={{ backgroundColor: 'white', padding: 20 }}>
      <View style={{ alignItems: 'center' }}>
        <Image source={{ uri: props.category.image }} style={styles.image} />

        <View style={styles.info}>
          <Text style={styles.sizeTitle}>{props.category.name_style}</Text>
          <Text style={styles.sizeText}>Giá: {props.category.price} VND</Text>
          <Text style={styles.sizeText}>Mô tả: {props.category.description}</Text>
        </View>

        <View style={styles.detail}>
          <View style={styles.nag}>
            <Image source={{ uri: props.photo.avatar }} style={styles.imageNag} />
            <Text style={styles.nameNag}>{props.photo.username}</Text>
          </View>
        </View>
      </View>
      <TouchableOpacity style={styles.booking} onPress={() => onBooking()}>
        <Text style={styles.textBooking}>Đặt lịch</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: screenWidth,
    height: screenWidth,
    borderRadius: 10,
  },
  info: {
    fontSize: 12,
    marginTop: 10,
    marginBottom: 10,
    borderBottomWidth: 3,
    borderBottomColor: Color.border,
  },
  nag: {
    alignItems: 'center',
    flexDirection: 'row',
    marginLeft: 30,
  },
  imageNag: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  nameNag: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  demo: {
    height: screenWidth / 1.5,
    width: screenWidth / 1.5,
  },
  detail1: {
    alignItems: 'center',
  },
  detail: {
    width: screenWidth,
    backgroundColor: '#EDE7E7',
  },
  status: {
    alignItems: 'center',
    textAlign: 'center',
  },
  sizeText: {
    fontSize: 15,
    fontWeight: '400',
  },
  sizeTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  booking: {
    alignItems: 'center',
    justifyContent: 'center',
    width: screenWidth,
    height: 50,
    backgroundColor: Color.background,
    position: 'absolute',
    alignSelf: 'flex-end',
  },
  textBooking: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
export default Detail;
