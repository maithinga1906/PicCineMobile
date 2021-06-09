import React, { Component } from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Swiper from 'react-native-swiper';
import Images from '../../../themes/images';
import IntroComponent from './introComponent';

class Intro extends Component {
  render() {
    const INTROS = [
      {
        id: 1,
        imageSource: Images.intro1,
        title: 'ĐEM LẠI CÁC TRẢI NGHIỆM HÌNH ẢNH',
        subTitle: 'Trong nhiếp ảnh, hiểu con người quan trọng hơn là hiểu máy ảnh',
        statusButton: false,
      },
      {
        id: 2,
        imageSource: Images.intro2,
        title: 'KẾT NỐI VỚI CÁC NHIẾP ẢNH GIA',
        subTitle: 'Bạn sẽ tìm được người chụp hình có tâm',
        statusButton: false,
      },
      {
        id: 3,
        imageSource: Images.intro3,
        title: 'CHÀO MỪNG BẠN ĐẾN VỚI PICCINE',
        subTitle: 'Nơi kết nối giữa nhiếp ảnh gia và người dùng',
        statusButton: true,
      },
    ];
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.topContainer}>
          <Swiper style={styles.wrapper} activeDotColor={Colors.primary} loop={false}>
            {INTROS.map((item) => {
              return <IntroComponent data={item} key={item.id} />;
            })}
          </Swiper>
        </View>
      </SafeAreaView>
    );
  }
}

export default Intro;

const styles = StyleSheet.create({
  wrapper: {},
  txtContinue: {
    textAlign: 'center',
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  button: {
    width: 145,
    borderRadius: 5,
    height: 45,
  },
  textButton: { fontSize: 18 },
  bottomContainer: {
    flex: 1,
    backgroundColor: Colors.white,
    justifyContent: 'space-around',
  },
  topContainer: {
    flex: 4,
    backgroundColor: Colors.white,
  },
});
