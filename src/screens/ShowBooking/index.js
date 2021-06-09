import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, View, Text, Dimensions } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import BookingActions from '../../redux/BookingRedux/actions';
import WaitingComponent from './WatingComponent';
import AcceptComponent from './AcceptComponent';
import CancelComponent from './CancelComponent';
import Color from '../../themes/colors';
const screenWidth = Dimensions.get('screen').width;
const ShowBooking = ({ componentId }) => {
  const dispatch = useDispatch();
  const [wait, setWait] = useState(true);
  const [acc, setAcc] = useState(false);
  const [remove, setRemove] = useState(false);
  const [xong, setXong] = useState(false);

  const data = useSelector((state) => state.info.dataInfo);
  console.log('data: ', data?.id);

  const book = useSelector((state) => state.bookingReducer.dataBooking);
  useEffect(() => {
    data && dispatch(BookingActions.showBooking(data?.id));
  }, [data]);

  const waiting = [];
  const accept = [];
  const cancel = [];
  const done = [];

  for (let i = 0; i < book?.count; i++) {
    if (book.data[i].booking_status === 1) {
      waiting.push(book.data[i]);
    }
    if (book.data[i].booking_status === 2) {
      accept.push(book.data[i]);
    }
    if (book.data[i].booking_status === 3 || book.data[i].booking_status === 4) {
      cancel.push(book.data[i]);
    }
    if (book.data[i].booking_status === 2 && book.data[i].is_finish === true) {
      done.push(book.data[i]);
    }
  }

  const onWaiting = () => {
    setWait(true);
    setAcc(false);
    setRemove(false);
    setXong(false);
  };
  const onAccept = () => {
    setWait(false);
    setAcc(true);
    setRemove(false);
    setXong(false);
  };
  const onCancel = () => {
    setWait(false);
    setAcc(false);
    setRemove(true);
    setXong(false);
  };
  const onDone = () => {
    setWait(false);
    setAcc(false);
    setRemove(false);
    setXong(true);
  };

  return (
    <ScrollView>
      <View style={styles.content}>
        {wait ? (
          <TouchableOpacity style={styles.acc_qr} onPress={onWaiting}>
            <Text style={styles.text}>Chờ xác nhận</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={onWaiting}>
            <Text style={styles.text}>Chờ xác nhận</Text>
          </TouchableOpacity>
        )}
        {acc ? (
          <TouchableOpacity style={styles.acc_qr} onPress={onAccept}>
            <Text style={styles.text}>Lịch chụp</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={onAccept}>
            <Text style={styles.text}>Lịch chụp</Text>
          </TouchableOpacity>
        )}
        {remove ? (
          <TouchableOpacity style={styles.acc_qr} onPress={onCancel}>
            <Text style={styles.text}>Đã hủy</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={onCancel}>
            <Text style={styles.text}>Đã hủy</Text>
          </TouchableOpacity>
        )}
        {xong ? (
          <TouchableOpacity style={styles.acc_qr} onPress={onDone}>
            <Text style={styles.text}>Hoàn thành</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={onDone}>
            <Text style={styles.text}>Hoàn thành</Text>
          </TouchableOpacity>
        )}
      </View>
      <View style={styles.container}>
        {wait ? (
          <View>
            {waiting?.map((suggestion, index) => {
              return <WaitingComponent componentId={componentId} item={suggestion} key={index} />;
            })}
          </View>
        ) : null}
        {acc ? (
          <View>
            {accept?.map((suggestion, index) => {
              return <AcceptComponent componentId={componentId} item={suggestion} key={index} />;
            })}
          </View>
        ) : null}
        {remove ? (
          <View>
            {cancel?.map((suggestion, index) => {
              return <CancelComponent componentId={componentId} item={suggestion} key={index} />;
            })}
          </View>
        ) : null}
        {xong ? (
          <View visible={xong}>
            {done?.map((suggestion, index) => {
              return <CancelComponent componentId={componentId} item={suggestion} key={index} />;
            })}
          </View>
        ) : null}
      </View>
    </ScrollView>
  );
};

export default ShowBooking;
const styles = StyleSheet.create({
  container: {
    marginLeft: 20,
    marginRight: 20,
  },
  content: {
    flexDirection: 'row',
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    alignItems: 'center',
    marginBottom: 20,
    justifyContent: 'space-between',
    marginLeft: 5,
    marginRight: 5,
  },
  acc_qr: {
    backgroundColor: Color.background,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    width: screenWidth / 4,
  },
});
