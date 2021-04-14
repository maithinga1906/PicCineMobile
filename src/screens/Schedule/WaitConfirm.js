/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import { View, Text, Image,Dimensions, StyleSheet,ScrollView,TouchableOpacity } from 'react-native';
import Icons from '../../themes/icons';
const screenWidth = Dimensions.get('screen').width;
const WaitConfirm = () => {
  return(
    <ScrollView style={{backgroundColor: 'white'}}>
    <View style={styles.content}>
      <View style={styles.acc}>
        <TouchableOpacity style={styles.acc_qr}>
          <Image source={Icons.check}/>
          <Text style={styles.text}>Chờ xác nhận</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.acc_qr} 
        // onPress={() => NavigationUtils.ConfirmContent()}
        >
          <Image source={Icons.tick}/>
          <Text style={styles.text}>Đã xác nhận</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.acc_qr} 
        // onPress={() => NavigationUtils.ReviewContent()}
        >
          <Image source={Icons.review}/>
          <Text style={styles.text}>Đánh giá</Text>
        </TouchableOpacity>
      </View>
    </View>
    <View style={{width:screenWidth}} >
      <View style={styles.content1}>
        <Image style={styles.img} source={require('../../assets/Images/NAG/1.jpg')}  resizeMode="cover" />
        <View style={{paddingLeft: 10}}>
          <Text style={{fontWeight: 'bold'}}>Chụp ảnh cổ phong</Text>
          <Text >Từ nhiếp ảnh gia Ưu Vô </Text>
          <Text style={styles.time}><Image source={Icons.time} /> 13:00 23-03-2021</Text>
          <View style={{flexDirection: 'row'}}>
            <Text >Ngày hẹn:  23-03-2021</Text><Text style={{color:'red', fontWeight: 'bold'}}> 100k/giờ</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text >Địa điểm:</Text>
            <Text style={{color:'#2BA8C3'}}>Bán đảo Sơn Trà, Đà Nẵng</Text>
          </View>
        </View>
       </View>
       <View style={styles.btnn}>
          <Text style={styles.txt}>Đang chờ xác nhận</Text>
       </View>
      
    </View>
  </ScrollView>
);
}
export default WaitConfirm;
const styles = StyleSheet.create({
  acc:{
    height: 79,
    flexDirection: 'row',
    borderBottomColor: '#A64244',
    borderBottomWidth: 1, 
    },
    acc_qr:{
      height: 79,
      width:screenWidth/3,
      alignItems: 'center',
    },
    text:{
      fontWeight: 'bold',
      fontSize: 16,
      lineHeight:21, 
      textAlign: 'center',
    },
//    content
content:{
margin:15
},
img:{
    width: screenWidth/4.5 ,
    height:95,
    borderRadius:5
  },
  content1:{
    flexDirection: 'row', 
    fontSize:16,
    padding: 10,
    paddingBottom: 15
  },
  time:{
    opacity:0.5
  },
  btn:{
    width:screenWidth/3,
    height: 35,
    borderColor: '#4C6F62',
    borderWidth: 2,
    borderRadius: 5,
    backgroundColor: '#4C6F62',
    alignItems: 'center',
    justifyContent: 'center',
  },
  txt:{
      color: '#f98866',
      fontWeight: 'bold',
      fontSize: 12,
  },
  btnn: {
    width: screenWidth,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnn: {
    width: screenWidth,
    alignItems: 'center',
    justifyContent: 'center',
  },
    });