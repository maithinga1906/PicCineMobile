import React, { useEffect } from 'react';
import { StyleSheet, ScrollView, Dimensions } from 'react-native';
import Info from './Info';
import { useDispatch, useSelector } from 'react-redux';
import CategoryTypes from '../../redux/Categories/actions';
import { ServiceComponent } from './ServiceComponent';

const Service = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(CategoryTypes.getCategory(props.item.id));
  }, []);

  const category = useSelector((state) => state.categoryReducer.categories);
  return (
    <ScrollView style={{ backgroundColor: 'white' }}>
      <Info item={props.item} />

      {category?.map((cate, index) => {
        return (
          <ServiceComponent
            style={styles.container1}
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
  container1: {
    marginLeft: 10,
    marginRight: 10,
  },
});
