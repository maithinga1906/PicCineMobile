/* eslint-disable no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  Dimensions,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';
import Images from '../../themes/images';
import Color from '../../themes/colors';
import Icons from '../../themes/icons';
import Swiper from 'react-native-swiper';
import Info from './Info';
import { detailScreen } from '../../navigation/pushScreens';
const screenWidth = Dimensions.get('screen').width;


export default class Service extends React.Component {
  render() {
    return (
      <ScrollView style={{backgroundColor: 'white'}}>
        <Info/>
       <TouchableOpacity style={styles.container} onPress={() => detailScreen()}>
         <Image source={Images.model1}  style={styles.image}/>
         <View style={styles.info}>
            <Text style={styles.title}>Chụp hình cổ phong</Text>
            <View>
              <Text>100.000₫ / 1h </Text>
            <Text>Chụp tại studio / ngoại cảnh</Text>
            </View>
         </View>
       </TouchableOpacity>

       <TouchableOpacity style={styles.container} onPress={() => detailScreen()}>
         <Image source={Images.model2}  style={styles.image}/>
         <View style={styles.info}>
            <Text style={styles.title}>Chụp hình cổ phong</Text>
            <View>
              <Text>100.000₫ / 1h </Text>
            <Text>Chụp tại studio / ngoại cảnh</Text>
            </View>
         </View>
       </TouchableOpacity>

       <TouchableOpacity style={styles.container} onPress={() => detailScreen()}>
         <Image source={Images.model3}  style={styles.image}/>
         <View style={styles.info}>
            <Text style={styles.title}>Chụp hình cổ phong</Text>
            <View>
              <Text>100.000₫ / 1h </Text>
            <Text>Chụp tại studio / ngoại cảnh</Text>
            </View>
         </View>
       </TouchableOpacity>

       <TouchableOpacity style={styles.container} onPress={() => detailScreen()}>
         <Image source={Images.model4}  style={styles.image}/>
         <View style={styles.info}>
            <Text style={styles.title}>Chụp hình cổ phong</Text>
            <View>
              <Text>100.000₫ / 1h </Text>
            <Text>Chụp tại studio / ngoại cảnh</Text>
            </View>
         </View>
       </TouchableOpacity>
      </ScrollView>
    );
  }
}
Service.options = {
    topBar: {
      height: 0,
    },
  };

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    margin: 10,
  },
  image: {
    width: 100,
    height: 100,
  },
  info: {
    justifyContent: 'space-between',
    marginLeft: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
