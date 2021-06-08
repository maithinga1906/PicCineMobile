import React from 'react';
import { View, Image, Text, StyleSheet, Dimensions } from 'react-native';
import Images from '../themes/images';
const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;
const Screen404 = () => {
  return (
    <View style={styles.item}>
      <Image source={Images.maintenance} style={styles.image} />
      <Text style={styles.text}>Chúng tôi đang trong quá trình cập nhật</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  item: {
    flex: 1,
    height: screenHeight - 150,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: screenWidth / 2,
    height: screenWidth / 2,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 14,
  },
});

export default Screen404;
