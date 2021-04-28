/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import { View, Text, Image,Dimensions, StyleSheet,ScrollView,TouchableOpacity } from 'react-native';
import Images from '../../themes/images';
import Color from '../../themes/colors';
import Icons from '../../themes/icons';
const screenWidth = Dimensions.get('screen').width;

const Noti = () => {
  return (
    <ScrollView style={{backgroundColor: 'white'}}>
      <TouchableOpacity>
        <View style={styles.content}>
        {/* resizeMode="cover" */}
          <Image style={styles.img} source={Images.nag1}  />
          <View style={{paddingLeft: 10}}>
          <Text style={{fontWeight: 'bold'}}>Đặt lịch chụp ảnh thành công</Text>
          <Text >Từ nhiếp ảnh gia Ưu Vô </Text>
          <Text style={styles.time}><Image source={Icons.time} /> 13:00 23-03-2021</Text>
          </View>
          <Image style={{margin: 15}} source={Icons.next} />
        </View>
      </TouchableOpacity>

      <TouchableOpacity>
        <View style={styles.content}>
          <Image style={styles.img} source={Images.nag1}  resizeMode="cover" />
          <View style={{paddingLeft: 10}}>
            <Text style={{fontWeight: 'bold'}}>Đặt lịch chụp ảnh thành công</Text>
            <Text >Từ nhiếp ảnh gia Ưu Vô </Text>
            <Text style={styles.time}><Image source={Icons.time} /> 13:00 23-03-2021</Text>
          </View>
            <Image style={{margin: 15}} source={Icons.next} />
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Noti;
const styles = StyleSheet.create({
img:{
  width: screenWidth / 4 ,
  height:55,
  borderRadius:5,
},
content:{
  flexDirection: 'row',
  fontSize:16,
  padding: 10,
  borderBottomColor: '#A64244',
  borderBottomWidth: 1,
  paddingBottom: 15,
},
time:{
  opacity:0.5,
},
});
