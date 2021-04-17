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
  BackHandler,
  ActivityIndicator,
  FlatList,
  AsyncStorage,
} from 'react-native';
import Images from '../../themes/images';
import Color from '../../themes/colors';
import Icons from '../../themes/icons';
const screenWidth = Dimensions.get('screen').width;

export default class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
             isLoading: true,
             token:''
        }
        this.getData(user);
        const user =  AsyncStorage.getItem('data');
      
    }
   
    getData(user) {
      const token = user;
      let api = 'backend-piccine.herokuapp.com/api/post/index/';
      // fetch('backend-piccine.herokuapp.com/api/post/index/')
      //   .then((response) => response.json())
      //   .then((data) => {
      //     this.setState({ posts: data });
      //   })
      //   .catch((error) => console.error(error))
      //   .finally(() => {
      //     this.setState({ isLoading: false });
      //   });
      fetch(api, { headers: {"Authorization" : `Bearer ${token}`} })
        .then(res => {
          this.setState({
          posts: res.data,  /*set response data in items array*/
          isLoading : false
        });
        })
      }
    
    render(){
    return (
      <View style={{ flex: 1,backgroundColor: 'white'}}>
        <Image source={Images.model1} style={styles.image} />

        <View style={styles.info}>
          <Text>100.000/ giờ</Text>
          <Text>Chụp tại studio / ngoại cảnh</Text>
        </View>
         {this.state.isLoading ? <ActivityIndicator/> : (
          <FlatList
            data={this.state.posts}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => (
        <View style={styles.detail}>
          <View style={styles.nag}>
            <Image source={Images.nag2} style={styles.imageNag} />
            <Text style={styles.nameNag}>{item.title}</Text>
          </View>
          <View style={styles.detail1}>
            <Text style={styles.status}>
             {item.content}
            </Text>
            <Image source={item.image} style={styles.demo} />
          </View>
        </View>
            )}/>)}
      </View>
    );
  }
}
Detail.options = {
  topBar: {
    title: {
      text: 'Chup hinh co phong',
      color: 'black',
    },
    backButton: {
      //55
      id: 'BACK',
      //55
      visible: true,
    },
  },
};

const styles = StyleSheet.create({
  image: {
    width: screenWidth,
    height: screenWidth,
  },
  info: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Color.background,
  },
  nag: {
    flexDirection: 'row',
	alignItems: 'center',
	marginLeft: 40,
  },
  imageNag: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  nameNag: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  demo: {
    height: screenWidth / 1.5,
    width: screenWidth / 1.5,
  },
  detail1: {
    alignItems: 'center',
  },
  detail: {
	width: screenWidth - 50,
	height: screenWidth + 50,
	backgroundColor: '#EDE7E7',
  },
  status: {
	alignItems: 'center',
	textAlign: 'center'
  },
});
