import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity } from 'react-native';
import { serviceScreen } from '../../navigation/pushScreens';
import { Images } from '../../themes';
const screenHeight = Dimensions.get('screen').height;
const screenWidth = Dimensions.get('screen').width;

const HomePopular = (props) => {
  return (
    <TouchableOpacity style={styles.popularPhotographer} onPress={() => serviceScreen()}>
      <Image
        source={Images.nag1}
        style={{ width: screenWidth / 3, height: screenWidth / 3, borderRadius: 10 }}
      />
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
});
