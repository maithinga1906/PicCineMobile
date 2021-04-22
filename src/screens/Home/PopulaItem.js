import React from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  Dimensions,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';
import { serviceScreen } from '../../navigation/pushScreens';
import { Images } from '../../themes/images';
const screenWidth = Dimensions.get('screen').width;
export const PopulaItem = (props) => {
  return (
    <TouchableOpacity style={styles.popularPhotographer} onPress={() => serviceScreen()}>
      <Image
        source={Images.nag1}
        style={{ width: screenWidth / 3, height: screenWidth / 3, borderRadius: 10 }}
      />
      <Text style={styles.name}></Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  topBar: {
    flexDirection: 'row',
    backgroundColor: Color.background,
    width: screenWidth,
    height: 60,
    alignItems: 'center',
  },
  search: {
    borderColor: Color.border,
    borderWidth: 1,
    width: screenWidth / 1.5,
    height: 40,
    borderRadius: 5,
    backgroundColor: 'white',
    marginLeft: 20,
    alignItems: 'center',
  },
  slides: {
    height: 150,
  },
  navigate: {
    width: screenWidth,
    height: 80,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  topButton: {
    width: screenWidth / 4,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10,
  },
  button: {
    width: 40,
    height: 40,
    backgroundColor: Color.but,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 12,
    paddingLeft: 10,
    width: screenWidth / 4 - 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imagePhoto: {
    width: screenWidth / 3,
    height: screenWidth / 3,
  },
  subTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 22,
  },

  popular: {
    flexDirection: 'row',
  },
  popularPhotographer: {
    margin: 20,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  suggestionPhotographer: {
    width: screenWidth,
    flexDirection: 'row',
    marginBottom: 10,
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
  suggestion: {
    flex: 1,
    marginLeft: 10,
  },
});
