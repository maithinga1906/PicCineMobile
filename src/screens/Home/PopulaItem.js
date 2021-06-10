import React from 'react';
import { StyleSheet, Text, Image, Dimensions, TouchableOpacity } from 'react-native';
import { Images } from '../../themes';
import { Navigation } from 'react-native-navigation';
const screenWidth = Dimensions.get('screen').width;

const HomePopular = (props) => {
  const onGet = () => {
    Navigation.push(props.componentId, {
      component: {
        name: 'Service',
        passProps: {
          item: props.item,
        },
        options: {
          topBar: {
            visible: true,
            title: {
              text: 'Service',
              alignment: 'center',
            },
          },
        },
        bottomTabs: {
          visible: false,
        },
      },
    });
  };
  return (
    <TouchableOpacity style={styles.popularPhotographer} onPress={() => onGet()}>
      <Image source={Images.nag1} style={styles.imageStyle} />
      <Text style={styles.name}>{props.item.username}</Text>
    </TouchableOpacity>
  );
};

export default HomePopular;

const styles = StyleSheet.create({
  popular: {
    flexDirection: 'row',
  },
  popularPhotographer: {
    margin: 20,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageStyle: {
    width: screenWidth / 3,
    height: screenWidth / 3,
    borderRadius: 10,
  },
});
