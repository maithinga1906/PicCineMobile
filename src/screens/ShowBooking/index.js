/* eslint-disable react-native/no-inline-styles */
import React, { useEffect } from 'react';
import { Dimensions, StyleSheet, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import BookingActions from '../../redux/BookingRedux/actions';
import Header from './Header';
import WaitingComponent from './WatingComponent';
const screenWidth = Dimensions.get('screen').width;

const ShowBooking = ({ componentId }) => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.info.dataInfo);
  const book = useSelector((state) => state.bookingReducer.dataBooking);
  useEffect(() => {
    dispatch(BookingActions.showBooking(data?.id));
  }, []);

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
    if (book.data[i].booking_status === 3) {
      cancel.push(book.data[i]);
    }
    if (book.data[i].is_finish === true) {
      done.push(book.data[i]);
    }
  }
  return (
    <ScrollView style={{ backgroundColor: 'white', padding: 20 }}>
      <Header />
      {waiting?.map((wait, index) => {
        return <WaitingComponent componentId={componentId} item={wait} key={index} />;
      })}
    </ScrollView>
  );
};

export default ShowBooking;
const styles = StyleSheet.create({
  img: {
    width: screenWidth / 4,
    height: 55,
    borderRadius: 5,
  },
  content: {
    flexDirection: 'row',
    fontSize: 16,
    padding: 10,
    borderBottomColor: '#A64244',
    borderBottomWidth: 1,
    paddingBottom: 15,
  },
  time: {
    opacity: 0.5,
  },
});
