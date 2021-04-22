/* eslint-disable no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import * as React from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  Dimensions,
  TouchableOpacity,
  TextInput,
  Image,
  ImageBackground,
} from 'react-native';
import Images from '../../themes/images';
import Color from '../../themes/colors';
import Icons from '../../themes/icons';
import Swiper from 'react-native-swiper';
import { useWindowDimensions } from 'react-native';
import { commentScreen, serviceScreen } from '../../navigation/pushScreens';
const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;
//***************************0 */
export default function Info() {
  return (
    <View>
      <View style={styles.container}>
        <ImageBackground source={Images.nag2} style={styles.image}>
          <TouchableOpacity>
            <Image source={Icons.back} />
          </TouchableOpacity>

          <View style={styles.star}>
            <Image source={Icons.star1} />
            <Image source={Icons.star1} />
            <Image source={Icons.star1} />
            <Image source={Icons.star1} />
            <Image source={Icons.star2} />
          </View>
        </ImageBackground>
        <View style={styles.info}>
          <Text>Môn Thúc</Text>
          <Text>Đam mê - Sáng tạo - Phong Cách</Text>
          <Text>101b Lê Hữu Trác</Text>
          <Text>Nhận chụp hình: T2 - CN </Text>
        </View>
      </View>

      <View style={styles.tab}>
        <TouchableOpacity
          style={styles.tabView}
          onPress={() => serviceScreen()}
        >
          <Image source={Icons.camera} />
          <Text>Dịch vụ</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tabView}
          onPress={() =>  commentScreen()}
        >
          <Image source={Icons.cmt} />
          <Text>Bình luận</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tabView}
          // onPress={() =>  NavigationUtils.detailContent()}
        >
          <Image source={Icons.camera} />
          <Text>Voucher</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
Info.options = {
  topBar: {
    height: 0,
  },
};

const styles = StyleSheet.create({
  container: {
    width: screenWidth,
    height: screenHeight / 2,
    backgroundColor: 'white',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  star: {
    flexDirection: 'row',
  },
  info: {
    margin: 10,
    borderBottomWidth: 1,
    borderBottomColor: Color.border,
  },
  tab: {
    flexDirection: 'row',
  },
  tabView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: screenWidth / 3,
    height: 50,
    backgroundColor: Color.background,
  },
  tabHover: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: screenWidth / 3,
    height: 50,
    backgroundColor: Color.green,
  },
});
