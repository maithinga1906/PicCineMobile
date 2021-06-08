/* eslint-disable no-lone-blocks */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { Component, useEffect } from 'react';
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
const screenWidth = Dimensions.get('screen').width;
import { useSelector, useDispatch } from 'react-redux';
import actions from '../../redux/Auth/Login/actions';
import InfoAction from '../../redux/Auth/InfoRedux/actions';
import Icon from 'react-native-vector-icons/FontAwesome';

const Profile = () => {
  const dispatch = useDispatch();
  const onLogout = () => {
    dispatch(actions.userLogout());
  };
  useEffect(() => {
    dispatch(InfoAction.getInfoUser());
  }, []);
  const info = useSelector((state) => state.info.dataInfo);
  return (
    <ScrollView style={{ backgroundColor: 'white' }}>
      <View style={styles.avatar}>
        <Image style={styles.img} source={{ uri: info?.avatar }} />
        <TouchableOpacity style={styles.edit}>
          <Image source={Icons.edit} />
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <View style={styles.info}>
          <Text style={styles.title}>Tên đăng nhập </Text>
          <Text style={styles.detail}>{info?.username}</Text>
        </View>

        <View style={styles.info}>
          <Text style={styles.title}>Email </Text>
          <Text>{info?.email}</Text>
        </View>

        <View style={styles.info}>
          <Text style={styles.title}>Số điện thoại </Text>
          <Text>{info?.phone}</Text>
        </View>

        <View style={styles.info}>
          <Text style={styles.title}>Địa chỉ</Text>
          <Text>{info?.address}</Text>
        </View>
        <TouchableOpacity style={styles.info} onPress={onLogout}>
          <Text style={styles.title}>Đăng xuất</Text>
          <Icon name={'sign-out'} size={16} />
        </TouchableOpacity>
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
  avatar: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: screenWidth,
    height: 300,
    borderColor: '#F4B9A7',
    borderWidth: 1,
  },
  logout: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
