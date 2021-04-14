/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import { View, Text, Image,Dimensions, StyleSheet,ScrollView,TouchableOpacity } from 'react-native';
import Icons from '../../themes/icons';
const screenWidth = Dimensions.get('screen').width;

const Null = () => {
  return(
    <ScrollView>
    <View style={styles.content}>
      <View style={styles.acc}>
        <TouchableOpacity style={styles.acc_qr}>
          <Image source={Icons.check}/>
          <Text style={styles.text}>Chờ xác nhận</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.acc_qr}>
          <Image source={Icons.tick}/>
          <Text style={styles.text}>Đã xác nhận</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.acc_qr}>
          <Image source={Icons.review}/>
          <Text style={styles.text}>Đánh giá</Text>
        </TouchableOpacity>
      </View>
    </View>
    <View style={styles.content1} >
     <Image style={{opacity:0.5}} source={Icons.cameraic}/>
     <Image style={{position:'absolute'}} source={Icons.check_list}/>
     <View style={{flexDirection:'row'}}>
        <Text style={{fontWeight:'bold'}}>Không có lịch hẹn nào!!</Text>
        <Image source={Icons.smile}/>
     </View>
    </View>
  </ScrollView>
);
}
export default Null;
const styles = StyleSheet.create({
    acc:{
    height: 79,
    flexDirection: 'row',
    borderBottomColor: '#A64244',
    borderBottomWidth: 1, 
    },
    acc_qr:{
      height: 79,
      width:110,
      alignItems: 'center',
      padding: 10,
    },
    text:{
      fontWeight: 'bold',
      fontSize: 16,
      lineHeight:21, 
      textAlign: 'center',
    },
//    content
content1:{
    width:screenWidth,
    height:screenWidth, 
    alignItems: 'center',
    justifyContent: 'center',
    top: 10
}
    });