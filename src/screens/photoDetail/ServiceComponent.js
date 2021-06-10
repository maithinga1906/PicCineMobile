import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, Dimensions } from 'react-native';
import { Navigation } from 'react-native-navigation';
const screenWidth = Dimensions.get('screen').width;

export const ServiceComponent = (props) => {
  const onDetail = () => {
    Navigation.push(props.componentId, {
      component: {
        name: 'Detail',
        passProps: {
          photo: props.photographer,
          category: props.item,
        },
        options: {
          topBar: {
            visible: true,
            title: {
              text: props.item.name_style,
              alignment: 'center',
            },
          },
          bottomTabs: {
            visible: false,
          },
        },
      },
    });
  };
  return (
    <TouchableOpacity onPress={() => onDetail()}>
      <Image source={{ uri: props.item.image }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.title}>{props.item.name_style}</Text>
        <View style={styles.container}>
          <Text>{props.item.price} </Text>
          <Text>{props.item.description}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  image: {
    width: screenWidth - 44,
    height: 150,
  },
  info: {
    justifyContent: 'space-between',
    width: 250,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  container: {
    marginBottom: 10,
  },
});
