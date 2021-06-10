import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity } from 'react-native';
import { Navigation } from 'react-native-navigation';
import { Colors } from '../../themes';

const screenWidth = Dimensions.get('screen').width;

const HomeRecommendation = (props) => {
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
              text: props.item.nickname,
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
    <View>
      <TouchableOpacity style={styles.suggestionPhotographer} onPress={onGet}>
        <Image source={{ uri: props.item.avatar }} style={styles.imagePhoto} />
        <View style={styles.content}>
          <Text style={styles.name}>{props.item.nickname}</Text>
          <View style={styles.address}>
            <Text style={styles.studio}>{props.item.address}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default HomeRecommendation;

const styles = StyleSheet.create({
  suggestionPhotographer: {
    width: screenWidth / 2 - 20,
    marginBottom: 30,
    borderRadius: 10,
  },
  imagePhoto: {
    width: screenWidth / 2.5,
    height: screenWidth / 3,
    borderRadius: 10,
  },
  content: {
    width: screenWidth,
    justifyContent: 'space-between',
  },
  address: {
    flexDirection: 'row',
  },
  name: {
    marginTop: 20,
    fontSize: 12,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 12,
  },
  studio: {
    fontSize: 12,
    color: Colors.background,
    fontWeight: 'bold',
  },
});
