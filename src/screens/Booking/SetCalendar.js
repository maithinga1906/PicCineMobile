/* eslint-disable no-undef */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
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
import DateTimePicker from '@react-native-community/datetimepicker';
import UselessTextInput from '../../component/Input';
import Images from '../../themes/images';
const screenWidth = Dimensions.get('screen').width;
const SetCalendar = () => {
  const [text, onChangeText] = React.useState(null);
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  // end date
  const [enddate, setEndDate] = useState(new Date());
  const [endtime, setEndTime] = useState(new Date());
  const [endmode, setEndMode] = useState('date');
  const [endshow, setEndShow] = useState(false);
  // const [address, setAddress] = useState('09-10-2020');

  const onChange = (event, selectedValue) => {
    setShow(Platform.OS === 'ios');
    if (mode == 'date') {
      const currentDate = selectedValue || new Date();
      setDate(currentDate);
      setMode('time');
      setShow(Platform.OS !== 'ios');
    } else {
      const selectedTime = selectedValue || new Date();
      setTime(selectedTime);
      setShow(Platform.OS === 'ios');
      setMode('date');
    }
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };
  // end date
  const onChangeEndDate = (event, selectedEnd) => {
    setEndShow(Platform.OS === 'ios');
    if (endmode == 'date') {
      const currentDate = selectedEnd || new Date();
      setEndDate(currentDate);
      setEndMode('time');
      setEndShow(Platform.OS !== 'ios');
    } else {
      const selectedTime = selectedEnd || new Date();
      setEndTime(selectedTime);
      setEndShow(Platform.OS === 'ios');
      setEndMode('date');
    }
  };

  const showEndMode = (currentMode) => {
    setEndShow(true);
    setEndMode(currentMode);
  };

  const showEndDatepicker = () => {
    showEndMode('date');
  };
  return (
    <ScrollView>
      <View style={{ margin: 15, backgroundColor: 'white', }}>
        <View style={styles.content}>
          <Image
            style={styles.img}
            source={Images.nag1}
          />
          <View style={{ paddingLeft: 10 }}>
            <Text style={styles.title}>Môn Thúc</Text>
            <Text style={{ fontSize: 16, lineHeight: 31 }}>
              Chụp ảnh cổ phong{' '}
            </Text>
            <Text
              style={{
                color: 'red',
                fontWeight: 'bold',
                fontSize: 16,
                lineHeight: 31,
              }}
            >
              {' '}
              100.000đ/giờ
            </Text>
          </View>
        </View>
        <View style={styles.date}>
          <Text style={styles.title}>Ngày và giờ chụp ảnh</Text>
          <View style={styles.section}>
            <Text style={styles.attent}>* Chọn ngày và giờ bắt đầu</Text>
            <TouchableOpacity style={styles.btn} onPress={showDatepicker}>
              <Text style={styles.datePickerStyle}>
                {formatDate(date, time)}
              </Text>
            </TouchableOpacity>
            {show && (
              <DateTimePicker
                testID="dateTimePicker"
                timeZoneOffsetInMinutes={0}
                value={date}
                mode={mode}
                is24Hour={true}
                display="default"
                onChange={onChange}
              />
            )}
          </View>
          <View style={styles.section}>
            <Text style={styles.attent}>* Chọn ngày và giờ kết thúc</Text>
            <TouchableOpacity style={styles.btn} onPress={showEndDatepicker}>
              <Text style={styles.datePickerStyle}>
                {formatEndDate(enddate, endtime)}
              </Text>
            </TouchableOpacity>
            {endshow && (
              <DateTimePicker
                testID="dateTimePicker"
                timeZoneOffsetInMinutes={0}
                value={enddate}
                mode={endmode}
                is24Hour={true}
                display="default"
                onChange={onChangeEndDate}
              />
            )}
          </View>
          <Text>Tổng Ngày: {formatTotalDate(date, enddate)} </Text>
          <View style={{ flexDirection: 'row' }}>
            <Text>Tổng Giờ:{formatTotalTime(time, endtime)}</Text>
            <Text style={{ color: 'red', fontWeight: 'bold', fontSize: 16 }}>
              {' '}
              Tổng tiền: {totaPrice(time, endtime)}.000đ
            </Text>

            <Text> </Text>
          </View>
        </View>
        <Text style={styles.title}>Địa chỉ chụp ảnh</Text>
        <View style={styles.section}>
          <UselessTextInput
            multiline
            numberOfLines={2}
            onChangeText={(text) => onChangeText(text)}
            placeholder="Nhập địa chỉ chụp ảnh"
          />
        </View>
        <TouchableOpacity
          style={styles.btn_set}
          // onPress={() => NavigationUtils.PaymentContent()}
        >
          <Text style={styles.txt}>Đặt lịch</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const totaPrice = (endtime, time) => {
  const total = endtime.getHours() - 7 - (time.getHours() - 7);
  if (total < 0) {
    return -total * 100;
  } else {
    return total * 100;
  }
};
const formatDate = (date, time) => {
  return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} ${
    time.getHours() - 7
  }:${time.getMinutes()} `;
};
const formatEndDate = (enddate, endtime) => {
  return `${enddate.getDate()}/${
    enddate.getMonth() + 1
  }/${enddate.getFullYear()} ${
    endtime.getHours() - 7
  }:${endtime.getMinutes()} `;
};
const formatTotalDate = (date, enddate) => {
  return `${enddate.getDate() - date.getDate() + 1}`;
};
const formatTotalTime = (time, endtime) => {
  // const diffInMs = Math.abs((enddate.getDate())-(date.getDate()));
  // return  Math.abs(diffInMs / (1000 * 60 * 60));
  const hours = endtime.getHours() - 7 - (time.getHours() - 7);
  const minutes = endtime.getMinutes() - time.getMinutes();

  if (hours < 0 && minutes < 0) {
    return `${-hours}:${-minutes}`;
  } else if (hours < 0 && minutes > -1) {
    return `${-hours}:${minutes}`;
  } else if (hours > -1 && minutes < 0) {
    return `${-hours}:${-minutes}`;
  } else {
    return `${hours}:${minutes}`;
  }
};
export default SetCalendar;
const styles = StyleSheet.create({
  attent: {
    color: 'red',
    fontSize: 16,
    lineHeight: 31,
    textAlign: 'left',
  },
  section: {
    alignItems: 'center',
    paddingBottom: 15,
    paddingTop: 15,
  },
  title: {
    borderBottomColor: '#A64244',
    borderBottomWidth: 1,
    fontWeight: 'bold',
    lineHeight: 31,
    fontSize: 16,
  },
  img: {
    width: screenWidth / 3,
    height: 105,
    borderRadius: 5,
  },
  content: {
    flexDirection: 'row',
    padding: 10,
    paddingBottom: 15,
  },
  time: {
    opacity: 0.5,
  },
  btn: {
    borderBottomColor: 'black',
    borderWidth: 1,
    padding: 10,
    width: 200,
    // flexDirection:'row',
  },
  datePickerStyle: {
    paddingLeft: 30,
    fontSize: 16,
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
  txt: {
    color: '#F4B9A7',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
