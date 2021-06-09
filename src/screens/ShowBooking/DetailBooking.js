import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';
import { useDispatch } from 'react-redux';
import Color from '../../themes/colors';
import BookTypes from '../../redux/BookingRedux/actions';
import { Navigation } from 'react-native-navigation';
import { Colors } from '../../themes';
const screenWidth = Dimensions.get('screen').width;

const DetailBooking = (props) => {
  const dispatch = useDispatch();

  const cancel = () => {
    const data = {
      booking_status: 3,
    };
    dispatch(BookTypes.cancelBooking(props.item.id, data));
    Navigation.push(props.componentId, {
      component: {
        name: 'ShowBooking',
      },
    });
  };
  return (
    <View>
      <View style={styles.status}>
        <Text style={{ marginLeft: 10 }}>{props.status}</Text>
      </View>
      <View style={styles.photo}>
        <Text style={styles.title}>Thông tin nhiếp anh gia</Text>
        <Text style={styles.category}>Tên: {props.item.photographer_name}</Text>
        <Text style={styles.category}>Số điện thoại: {props?.item.photographer_phone}</Text>
      </View>
      <View style={styles.photo}>
        <Text style={styles.title}>Thông tin phong cách chụp bạn chọn</Text>
        <View style={styles.product}>
          <Image source={{ uri: props?.item.image }} style={styles.image} />
          <View style={styles.cate}>
            <Text style={styles.category}>{props?.item.name_style}</Text>
            <Text style={styles.category}>{props?.item.time_booking} ngày</Text>
            <Text style={styles.category}>₫{props?.item.price}</Text>
          </View>
        </View>
      </View>
      {props.item.booking_status === 1 ? (
        <TouchableOpacity onPress={cancel} style={styles.remove}>
          <Text style={styles.textButton}>Hủy lịch chụp</Text>
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

export default DetailBooking;
const styles = StyleSheet.create({
  photo: {
    fontWeight: 'bold',
    marginBottom: 20,
    marginRight: 20,
  },
  image: {
    width: screenWidth - 20,
    height: 150,
  },

  cate: {
    justifyContent: 'space-around',
    marginLeft: 10,
  },
  status: {
    color: 'green',
    marginBottom: 20,
    height: 50,
    justifyContent: 'center',
    backgroundColor: Color.background,
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 10,
  },
  category: {
    marginBottom: 5,
  },
  remove: {
    height: 50,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  photo: {
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    marginLeft: 10,
  },
  textButton: {
    color: Colors.white,
    fontWeight: 'bold',
    fontSize: 15,
  },
});
