import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  Dimensions,
} from 'react-native';
import { Colors } from '../../themes';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { useSelector, useDispatch } from 'react-redux';
import BookTypes from '../../redux/BookingRedux/actions';
import moment from 'moment';
import { Navigation } from 'react-native-navigation';
const screenWidth = Dimensions.get('screen').width;

const SetSchedule = (props) => {
  const [startDate, setStartDate] = useState();
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [day, setDay] = useState();
  const [add, setAdd] = useState();
  const totalPrice = day * props.category.price;
  const info = useSelector((state) => state.info.dataInfo);
  const dispatch = useDispatch();
  console.log('date', startDate);
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };
  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date, time) => {
    hideDatePicker();
    setStartDate(moment(date).format('YYYY MM DD'));
  };
  const booking = () => {
    const data = {
      id_customer: info.id,
      id_photographer: props.photographer.id,
      id_combo: props.category.id,
      id_voucher: 1,
      start_time: startDate,
      time_booking: day,
      price: totalPrice,
      booking_address: add,
    };
    dispatch(BookTypes.booking(data));
    Navigation.push(props.componentId, {
      component: {
        name: 'ShowBooking',
      },
    });
  };
  return (
    <View>
      <ScrollView style={{ padding: 10 }}>
        <View>
          <View>
            <Text style={styles.title}>Nhiếp ảnh gia</Text>
            <View style={styles.nag}>
              <Image source={{ uri: props.photographer.avatar }} style={styles.imageNag} />
              <Text style={styles.nameNag}>{props.photographer.nickname}</Text>
            </View>
          </View>

          <View>
            <Text style={styles.title}>Phong cách chụp</Text>
            <View style={styles.nag}>
              <Image source={{ uri: props.category.image }} style={styles.imageNag} />
              <View style={styles.categoryStyle}>
                <Text style={styles.nameNag}>{props.category.name_style}</Text>
                <Text style={styles.nameNag}>{props.category.price} vnd / ngày</Text>
              </View>
            </View>
          </View>

          <View>
            <Text style={styles.title}>Ngày chụp hình </Text>
            <View style={{ flexDirection: 'row', marginTop: 10 }}>
              <TouchableOpacity onPress={showDatePicker} style={styles.date}>
                <Text>Vui lòng chọn ngày tại đây </Text>
              </TouchableOpacity>
              <Text style={{ fontSize: 15, fontWeight: 'bold' }}>
                {startDate ? '- ngày chụp: ' + startDate : '-'}
              </Text>
              <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
                cancelText="Hủy"
              />
            </View>
          </View>

          <View>
            <Text style={styles.title}>Chụp trong vòng mấy ngày </Text>
            <TextInput
              type="number"
              style={styles.textInput}
              onChangeText={(val) => setDay(val)}
              placeholder="Nhập số ngày bạn muốn thuê"
            />
          </View>

          <View>
            <Text style={styles.title}>Địa điểm gặp mặt </Text>
            <TextInput
              type="text"
              style={styles.textAdd}
              onChangeText={(val) => setAdd(val)}
              placeholder="Nhập địa chỉ gặp mặt"
            />
          </View>
        </View>
      </ScrollView>
      <View style={styles.booking}>
        <View style={styles.total}>
          <Text>Tông tiền: {totalPrice ? totalPrice : 0}</Text>
        </View>

        <TouchableOpacity style={styles.button} onPress={booking}>
          <Text>Lên lịch</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  nag: {
    flexDirection: 'row',
    marginTop: 10,
    alignItems: 'center',
  },
  imageNag: {
    width: 60,
    height: 60,
  },
  nameNag: {
    fontSize: 15,
    marginLeft: 10,
  },
  categoryStyle: {
    justifyContent: 'space-between',
  },
  textInput: {
    marginTop: 10,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 5,
    borderRadius: 15,
    color: 'black',
  },
  textAdd: {
    marginTop: 10,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 5,
    borderRadius: 15,
    color: 'black',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.background,
    height: 49,
    width: screenWidth / 2.3,
  },
  total: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    width: screenWidth / 1.75,
  },
  booking: {
    borderColor: Colors.border,
    flexDirection: 'row',
    marginTop: 90,
    alignItems: 'center',
    borderWidth: 1,
    justifyContent: 'center',
    height: 50,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  date: {
    justifyContent: 'center',

    borderColor: Colors.border,
    borderWidth: 1,
    marginRight: 10,
    height: 30,
  },
});
export default SetSchedule;
