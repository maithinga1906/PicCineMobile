import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const AcceptComponent = (props) => {
  console.log('props', props.item.photographer_name);
  return (
    <View>
      <TouchableOpacity>
        <Text style={styles.photo}>
          <Icon name={'camera'} size={16} /> {props?.item.photographer_name}
        </Text>
        <View style={styles.product}>
          <Image source={{ uri: props?.item.image }} style={styles.image} />
          <View style={styles.cate}>
            <Text style={styles.category}>{props?.item.name_style}</Text>
            <Text style={styles.category}>+{props?.item.time_booking}</Text>
            <Text style={styles.category}>₫{props?.item.price}</Text>
          </View>
        </View>
        <Text style={styles.status}>Nhiếp ảnh gia đã xác nhận</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  photo: {
    fontWeight: 'bold',
    marginBottom: 20,
  },
  image: {
    width: 80,
    height: 80,
  },
  product: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cate: {
    justifyContent: 'space-around',
  },
  category: {
    textAlign: 'right',
  },
  status: {
    color: 'green',
    marginBottom: 20,
  },
});

export default AcceptComponent;
