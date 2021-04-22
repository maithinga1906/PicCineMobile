/* eslint-disable no-lone-blocks */
/* eslint-disable react-native/no-inline-styles */
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
import Images from '../../themes/images';
const screenWidth = Dimensions.get('screen').width;
import { useSelector } from 'react-redux';
import Head from './head';

const Profile = () => {
  const user = useSelector((state) => state.login.loginResponse);
  return (
    <ScrollView style={{ backgroundColor: 'white' }}>
      <Head />
      <View style={styles.content}>
        <View style={styles.info}>
          <Text style={styles.title}>Tên đăng nhập </Text>
          <Text style={styles.detail}>{user.username}</Text>
        </View>

        <View style={styles.info}>
          <Text style={styles.title}>Email </Text>
          <Text>{user.email}</Text>
        </View>

        <View style={styles.info}>
          <Text style={styles.title}>Số điện thoại </Text>
          <Text>{user.phone}</Text>
        </View>

        <View style={styles.info}>
          <Text style={styles.title}>Ngày sinh </Text>
          <Text>18/05/2000</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default Profile;
const styles = StyleSheet.create({
  content: {
    flex: 1,
    padding: 15,
  },
  info: {
    flex: 1,
    flexDirection: 'row',
    height: 50,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: { fontWeight: 'bold' },
});
