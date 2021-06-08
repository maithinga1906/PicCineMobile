import React from 'react';
import { Image, View, StyleSheet } from 'react-native';
import Swiper from 'react-native-swiper';
import { Images } from '../themes';

const Slide = () => {
  return (
    <View style={styles.slides}>
      <Swiper style={styles.wrapper}>
        <View style={styles.slide1}>
          <Image source={Images.slide1} />
        </View>
        <View style={styles.slide1}>
          <Image source={Images.slide2} />
        </View>
        <View style={styles.slide1}>
          <Image source={Images.slide3} />
        </View>
      </Swiper>
    </View>
  );
};

const styles = StyleSheet.create({
  slides: {
    marginTop: 50,
    height: 200,
    padding: 20,
    borderRadius: 14,
  },
  slide1: {
    flex: 1,
    resizeMode: 'contain',
    justifyContent: 'center',
    borderRadius: 14,
  },
});
export default Slide;
