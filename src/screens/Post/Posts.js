/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import { View, Text, Image,Dimensions, StyleSheet,ScrollView,TouchableOpacity } from 'react-native';
import Images from '../../themes/images';
import Color from '../../themes/colors';
import Icons from '../../themes/icons';
const screenWidth = Dimensions.get('screen').width;

class Posts extends Component {
    constructor() {
        super();
        this.state = {
            posts: [],
        }
        this.getData();
    }
    getData() {
      fetch("http://127.0.0.1:8000/api/post/index")
        .then(response => {
            response.json().then((data) => {
              this.updateUI(data);
            });
        });
    }
      updateUI(data) {
        this.setState({
            posts: data
        })
    }
    render(){
  return (
    <ScrollView>
    
      <View style={styles.content}>
        <View style={styles.avatar}>
          <Image style={styles.img} source={Images.nag1}/>
        </View>
        <View style={styles.acc}>
          <View style={styles.acc_qr}>
            <Text style={styles.text}>200.000 đ/giờ</Text>
            <Text  style={styles.text}>Chụp ảnh tại studio/ngoại cảnh</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.btn_set} >
          <Text style={{color:'white', fontSize:16}}>Đặt lịch</Text>
        </TouchableOpacity>
          {this.state.posts.map(item =>
        <View style={{ backgroundColor:'#F2F3F5', borderRadius:10,marginTop:10,padding: 5}}>
          <View style={{flexDirection:'row'}}>
            <Image style={styles.avat} source={Images.nag1}/>
            <Text style={styles.text}>{item.title}</Text>
          </View>
          <View style={styles.avatar}>
            <Text style={{padding: 5, fontSize:16}}>{item.content}</Text>
            <Image style={styles.img_avt} source={item.image}/>
          </View>
        </View>
          )}
      </View>
    </ScrollView>
  );
}
}

export default Posts;
const styles = StyleSheet.create({
  btn_set: {
    height: 45,
    borderColor: '#3C574D',
    borderWidth: 2,
    backgroundColor: '#3C574D',
    alignItems: 'center',
    justifyContent: 'center',

  },
img:{
    maxWidth: screenWidth / 1.04,
    height: 150,
},
img_avt:{
  maxWidth: screenWidth / 1.04,
  minHeight: 150,
},
avatar:{
  alignItems: 'center',
  justifyContent: 'center',
},
avat:{
  width: screenWidth / 7,
  height: screenWidth / 7,
  borderRadius: 100,
  borderColor: '#F4B9A7',
  borderWidth:1,
  // position: 'absolute',
},
// edit:{
//   position: 'absolute',
//   left: 150,
//   top: 100,
//   width:20
// },
acc:{
height: 65,
backgroundColor: '#F2F3F5',
},
acc_qr:{
  fontSize:16,
  alignItems: 'center',
  justifyContent:'center',
},
text:{
  color: 'black',
  fontWeight: 'bold',
  fontSize: 16,
  paddingLeft:5,
},
content:{
 marginRight:5,
 marginLeft:5,
},

});
