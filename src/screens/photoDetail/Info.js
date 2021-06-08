import * as React from 'react';
import { StyleSheet, View, Text, Dimensions, ImageBackground } from 'react-native';
import Color from '../../themes/colors';
import Icon from 'react-native-vector-icons/FontAwesome';

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

const Info = (props) => {
  return (
    <View>
      <View style={styles.container}>
        <ImageBackground source={{ uri: props.item.avatar }} style={styles.image} />
        <View style={styles.info}>
          <Text>{props.item.nickname}</Text>
          <Text>
            <Icon name={'map-marker'} size={14} />: {props.item.studio_address}
          </Text>
        </View>
      </View>
    </View>
  );
};
export default Info;
Info.options = {
  topBar: {
    height: 0,
  },
};

const styles = StyleSheet.create({
  container: {
    width: screenWidth,
    height: screenHeight / 2,
    backgroundColor: 'white',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  star: {
    flexDirection: 'row',
  },
  info: {
    borderBottomWidth: 3,
    borderBottomColor: Color.border,
    marginBottom: 30,
    marginTop: 20,
  },
  tab: {
    flexDirection: 'row',
  },
  tabView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: screenWidth / 2,
    height: 50,
    backgroundColor: Color.background,
  },
  tabHover: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: screenWidth / 3,
    height: 50,
    backgroundColor: Color.green,
  },
});
