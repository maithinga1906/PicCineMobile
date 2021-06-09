import React from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native';
import Color from '../../themes/colors';
import { Navigation } from 'react-native-navigation';
const screenWidth = Dimensions.get('screen').width;

const Detail = (props) => {
  const onBooking = () => {
    Navigation.push(props.componentId, {
      component: {
        name: 'SetSchedule',
        passProps: {
          photographer: props.photo,
          category: props.category,
        },
        options: {
          topBar: {
            visible: true,
            title: {
              text: 'Đặt lịch',
              alignment: 'center',
            },
          },
        },
      },
    });
  };
  return (
    <ScrollView style={{ backgroundColor: 'white' }}>
      <View style={{ alignItems: 'center' }}>
        <Image source={{ uri: props.category.image }} style={styles.image} />

        <View style={styles.info}>
          <Text style={styles.sizeTitle}>{props.category.name_style}</Text>
          <Text style={styles.sizeText}>Giá: {props.category.price} VND</Text>
          <Text style={styles.sizeText}>Mô tả: {props.category.description}</Text>
        </View>

        <View style={styles.detail}>
          <View style={styles.nag}>
            <Image source={{ uri: props.photo.avatar }} style={styles.imageNag} />
            <Text style={styles.nameNag}>{props.photo.username}</Text>
          </View>
        </View>
      </View>
      <View>
        <Text style={styles.sizeTitle}>Đánh giá từ khách hàng</Text>
      </View>
      <TouchableOpacity style={styles.booking} onPress={() => onBooking()}>
        <Text style={styles.textBooking}>Đặt lịch</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: screenWidth,
    height: 200,
    borderRadius: 10,
  },
  info: {
    fontSize: 12,
    marginTop: 10,
    marginBottom: 10,
    borderBottomWidth: 3,
    borderBottomColor: Color.border,
  },
  nag: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  imageNag: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 20,
  },
  nameNag: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  demo: {
    height: screenWidth / 1.5,
    width: screenWidth / 1.5,
  },
  detail1: {
    alignItems: 'center',
  },
  detail: {
    width: screenWidth,
    marginLeft: 20,
  },
  status: {
    alignItems: 'center',
    textAlign: 'center',
  },
  sizeText: {
    fontSize: 15,
    fontWeight: '400',
  },
  sizeTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 20,
  },
  booking: {
    alignItems: 'center',
    justifyContent: 'center',
    width: screenWidth,
    height: 50,
    backgroundColor: Color.background,
  },
  textBooking: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
export default Detail;
