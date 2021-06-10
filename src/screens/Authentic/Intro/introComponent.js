/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity, Dimensions } from 'react-native';
import { useDispatch } from 'react-redux';
import { markSkipIntro } from '../../../redux/AppRedux/actions';
import { Colors } from '../../../themes';
const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

const IntroComponent = (props) => {
  const dispatch = useDispatch();
  const makeSkipIntro = () => {
    dispatch(markSkipIntro());
  };
  const { data } = props;
  const { imageSource, title, subTitle, statusButton } = data;
  return (
    <View style={styles.slide}>
      <View style={styles.topSlide}>
        <View style={{ justifyContent: 'flex-end' }}>
          <Image
            source={imageSource}
            style={{
              height: screenHeight / 3,
              width: screenWidth / 1.3,
            }}
          />
        </View>
        <View style={styles.borderText}>
          <View style={{ marginTop: 20 }}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subTitle}>{subTitle}</Text>
          </View>
          {statusButton === true ? (
            <View style={styles.buttonGroup}>
              <TouchableOpacity style={styles.button} onPress={makeSkipIntro}>
                <Text style={styles.textButton}>Bắt Đầu</Text>
              </TouchableOpacity>
            </View>
          ) : null}
        </View>
      </View>
    </View>
  );
};
export default IntroComponent;

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    alignItems: 'center',
    height: screenHeight,
  },
  borderText: {
    width: screenWidth,
    height: 300,
    marginTop: 120,
    backgroundColor: Colors.background,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  topSlide: {
    alignItems: 'center',
    marginTop: 50,
  },
  title: {
    paddingHorizontal: 25,
    marginTop: 10,
    textAlign: 'center',
    fontFamily: 'SVN-ProximaNova',
    fontSize: 19,
    fontWeight: 'bold',
  },
  subTitle: {
    paddingHorizontal: 10,
    lineHeight: 27,
    marginTop: 25,
    textAlign: 'center',
    fontFamily: 'SVN-ProximaNova',
    fontSize: 15,
    color: Colors.grey,
  },
  buttonGroup: {
    alignItems: 'center',
    marginTop: 50,
  },
  button: {
    marginTop: -30,
    backgroundColor: Colors.primary,
    width: 130,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
  },
  textButton: {
    fontSize: 15,
    color: Colors.white,
  },
});
