/* eslint-disable no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
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
import Images from '../../themes/images';
import Color from '../../themes/colors';
import Icons from '../../themes/icons';
import Swiper from 'react-native-swiper';
import Info from './Info';
import { detailScreen } from '../../navigation/pushScreens';
import { useDispatch, useSelector } from 'react-redux';
import CategoryTypes from '../../redux/Categories/actions';
import { ServiceComponent } from './ServiceComponent';
const screenWidth = Dimensions.get('screen').width;

const Service = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(CategoryTypes.getCategory(props.item.id));
  }, []);

  const category = useSelector((state) => state.categoryReducer.categories);
  return (
    <ScrollView style={{ backgroundColor: 'white', padding: 20 }}>
      <Info item={props.item} />

      {category?.map((cate, index) => {
        return (
          <ServiceComponent
            componentId={props.componentId}
            item={cate}
            key={index}
            photographer={props.item}
          />
        );
      })}
    </ScrollView>
  );
};
export default Service;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    margin: 10,
  },
  image: {
    width: 100,
    height: 100,
  },
  info: {
    justifyContent: 'space-between',
    marginLeft: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
