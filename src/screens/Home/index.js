/* eslint-disable react-native/no-inline-styles */
import React, { useEffect } from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  Dimensions,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Color from '../../themes/colors';
import { useDispatch, useSelector } from 'react-redux';
import HomeActions from '../../redux/HomeRedux/actions';
import HomeRecommendation from './HomeRecommendation';
import Icon from 'react-native-vector-icons/FontAwesome';
import Slide from '../../component/Slide';
import messaging from '@react-native-firebase/messaging';
import InfoAction from '../../redux/Auth/InfoRedux/actions';

const screenWidth = Dimensions.get('screen').width;

const Homepage = ({ componentId }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = messaging().onMessage(async (remoteMessage) => {
      console.log('A new FCM message arrived!', JSON.stringify(remoteMessage));
    });

    return unsubscribe;
  }, []);
  useEffect(() => {
    dispatch(InfoAction.getInfoUser());
  }, []);
  useEffect(() => {
    dispatch(HomeActions.getPopularHome());
  }, []);

  useEffect(() => {
    dispatch(HomeActions.getRecommendationHome());
  }, []);

  const info = useSelector((state) => state.info.dataInfo);
  const recommendation = useSelector((state) => state.homeReducer.dataRecommendation);
  const popular = useSelector((state) => state.homeReducer.dataPopular);

  return (
    <ScrollView style={styles.container}>
      <View
        style={{
          backgroundColor: '#f4b9a7',
          borderBottomLeftRadius: 50,
          borderBottomRightRadius: 50,
          height: 200,
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 20,
            alignItems: 'center',
          }}
        >
          <Text
            style={{
              color: 'white',
              fontSize: 24,
              fontWeight: '700',
            }}
          >
            Welcome {info?.username}
          </Text>
          <Icon name={'bell'} size={20} color={'white'} />
        </View>

        <View style={styles.searching}>
          <TextInput style={styles.search} placeholder="Tìm kiếm..." />
        </View>
        <View style={styles.navigate}>
          <TouchableOpacity>
            <View style={styles.topButton}>
              <View style={styles.button}>
                <Icon name={'paper-plane'} size={18} />
              </View>
              <Text style={styles.text}>Top Nhiếp Ảnh</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.topButton}>
              <View style={styles.button}>
                <Icon name={'paper-plane'} size={18} />
              </View>
              <Text style={styles.text}>Gần Bạn</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.topButton}>
              <View style={styles.button}>
                <Icon name={'ticket'} size={18} />
              </View>
              <Text style={styles.text}>Khuyến Mãi</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <Slide />
      <Text style={styles.subTitle}>Gợi Ý</Text>
      <ScrollView style={styles.suggestion}>
        <View style={styles.wrapView}>
          {recommendation?.map((suggestion, index) => {
            return <HomeRecommendation componentId={componentId} item={suggestion} key={index} />;
          })}
          {popular?.map((suggestion, index) => {
            return <HomeRecommendation componentId={componentId} item={suggestion} key={index} />;
          })}
        </View>
      </ScrollView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  wrapView: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  topBar: {
    flexDirection: 'row',
    backgroundColor: Color.background,
    width: screenWidth,
    height: 170,
  },
  search: {
    width: screenWidth - 40,
    height: 40,
    borderRadius: 5,
    backgroundColor: 'white',
    marginLeft: 20,
    alignItems: 'center',
  },
  slides: {
    height: 250,
  },
  navigate: {
    width: screenWidth - 40,
    backgroundColor: 'white',
    height: 94,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 30,
    margin: 20,
    borderRadius: 14,
    padding: 20,
    borderColor: 'gray',
    borderWidth: 0.5,
  },
  topButton: {
    width: screenWidth / 4,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  button: {
    width: 40,
    height: 40,
    backgroundColor: Color.background,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  text: {
    fontSize: 12,
    paddingLeft: 10,
    width: screenWidth / 4,
    textAlign: 'center',
    marginTop: 10,
  },
  imagePhoto: {
    width: screenWidth / 3,
    height: screenWidth / 3,
    borderRadius: 10,
  },
  subTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingLeft: 20,
    alignItems: 'center',
    marginTop: 24,
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
    padding: 20,
  },
  searching: {
    flexDirection: 'row',
  },
});
export default Homepage;
