import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity } from 'react-native';
import { serviceScreen } from '../../navigation/pushScreens';
import Images from '../../themes/images';
import Icons from '../../themes/icons';
import { Colors } from '../../themes';
const screenHeight = Dimensions.get('screen').height;
const screenWidth = Dimensions.get('screen').width;

const HomeRecommendation = (props) => {
  return (
    <TouchableOpacity style={styles.suggestionPhotographer} onPress={() => serviceScreen()}>
      <Image source={Images.nag2} style={styles.imagePhoto} />
      <View style={styles.content}>
        <Text style={styles.name}>{props.item.username}</Text>
        <View style={styles.address}>
          <Image source={Icons.address} style={{ width: 16, height: 16 }} />
          <Text>{props.item.address}</Text>
        </View>
        <Text style={styles.description}>{props.item.address}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default HomeRecommendation;

const styles = StyleSheet.create({
  suggestionPhotographer: {
    width: screenWidth,
    flexDirection: 'row',
    marginBottom: 10,
    borderRadius: 10,
  },
  imagePhoto: {
    width: screenWidth / 3,
    height: screenWidth / 3,
    borderRadius: 10,
  },
  content: {
    width: screenWidth / 2,
    height: screenWidth / 3,
    justifyContent: 'space-between',
    marginLeft: 20,
  },
  address: {
    flexDirection: 'row',
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 12,
  },
});
