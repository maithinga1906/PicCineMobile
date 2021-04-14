/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
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
// import { NavigationUtils } from '../../navigation';
import { serviceScreen } from '../../navigation/pushScreens';
const screenWidth = Dimensions.get('screen').width;

export default class Homepage extends React.Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.topBar}>
          <TextInput style={styles.search} placeholder="Tìm kiếm...">
            {/* <Image
            source={Icons.search}
            style={{paddingLeft: 10}} /> */}
          </TextInput>

          <TouchableOpacity style={{ marginLeft: 14 }}>
            <Image source={Icons.list} />
          </TouchableOpacity>

          <TouchableOpacity style={{ marginLeft: 14 }}>
            <Image source={Icons.chat} />
          </TouchableOpacity>
        </View>

        <View style={styles.slides}>
          <Swiper style={styles.wrapper}>
            <View style={styles.slide1}>
              <Image source={Images.slide1} />
            </View>
            <View style={styles.slide1}>
              <Image source={Images.slide2} />
            </View>
            <View style={styles.slide1}>
              <Image source={Images.slide1} />
            </View>
          </Swiper>
        </View>

        <View style={styles.navigate}>
          <TouchableOpacity style={styles.topButton}>
            <View style={styles.button}>
              <Image source={Icons.top} />
            </View>
            <Text style={styles.text}>Top Nhiếp Ảnh Gia</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.topButton}>
            <View style={styles.button}>
              <Image source={Icons.top} />
            </View>
            <Text style={styles.text}>Top Nhiếp Ảnh Gia</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.topButton}>
            <View style={styles.button}>
              <Image source={Icons.top} />
            </View>
            <Text style={styles.text}>Top Nhiếp Ảnh Gia</Text>
          </TouchableOpacity>
        </View>

        {/* ********************************************************************** */}

        <Text style={styles.subTitle}>Phổ Biến</Text>
        <ScrollView style={styles.popular} horizontal={true}>
          <TouchableOpacity
            style={styles.popularPhotographer}
            onPress={() => serviceScreen()}
          >
            <Image
              source={Images.nag1}
              style={{ width: screenWidth / 3, height: screenWidth / 3 }}
            />
            <Text style={styles.name}>Nguyễn Văn Hùng</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.popularPhotographer}
            onPress={() => serviceScreen()}
          >
            <Image
              source={Images.nag1}
              style={{ width: screenWidth / 3, height: screenWidth / 3 }}
            />
            <Text style={styles.name}>Nguyễn Văn Hùng</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.popularPhotographer}
            onPress={() => serviceScreen()}
          >
            <Image
              source={Images.nag2}
              style={{ width: screenWidth / 3, height: screenWidth / 3 }}
            />
            <Text style={styles.name}>Nguyễn Văn Hùng</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.popularPhotographer}
            onPress={() => serviceScreen()}
          >
            <Image
              source={Images.nag1}
              style={{ width: screenWidth / 3, height: screenWidth / 3 }}
            />
            <Text style={styles.name}>Nguyễn Văn Hùng</Text>
          </TouchableOpacity>
        </ScrollView>
        {/* ********************************************************************** */}

        <Text style={styles.subTitle}>Gợi Ý</Text>
        <ScrollView style={styles.suggestion}>
          <TouchableOpacity style={styles.suggestionPhotographer}>
            <Image
              source={Images.nag2}
              style={styles.imagePhoto}
            />
            <View style={styles.content}>
              <Text style={styles.name}>Môn Thúc</Text>
              <View style={styles.address}>
                <Image
                  source={Icons.address}
                  style={{ width: 16, height: 16 }}
                />
                <Text>101b Le Huu Trac</Text>
              </View>
              <Text style={styles.description}>
                Tạo ra các sản phẩm độc đáo, những sáng tạo trong cách tạo dáng,
                chụp, hiệu ứng,…
              </Text>
            </View>
          </TouchableOpacity>
{/* ********************************************************************** */}
<TouchableOpacity style={styles.suggestionPhotographer}>
            <Image
              source={Images.nag2}
              style={styles.imagePhoto}
            />
            <View style={styles.content}>
              <Text style={styles.name}>Môn Thúc</Text>
              <View style={styles.address}>
                <Image
                  source={Icons.address}
                  style={{ width: 16, height: 16 }}
                />
                <Text>101b Le Huu Trac</Text>
              </View>
              <Text style={styles.description}>
                Tạo ra các sản phẩm độc đáo, những sáng tạo trong cách tạo dáng,
                chụp, hiệu ứng,…
              </Text>
            </View>
          </TouchableOpacity>
{/* ********************************************************************** */}
<TouchableOpacity style={styles.suggestionPhotographer}>
            <Image
              source={Images.nag2}
              style={styles.imagePhoto}
            />
            <View style={styles.content}>
              <Text style={styles.name}>Môn Thúc</Text>
              <View style={styles.address}>
                <Image
                  source={Icons.address}
                  style={{ width: 16, height: 16 }}
                />
                <Text>101b Le Huu Trac</Text>
              </View>
              <Text style={styles.description}>
                Tạo ra các sản phẩm độc đáo, những sáng tạo trong cách tạo dáng,
                chụp, hiệu ứng,…
              </Text>
            </View>
          </TouchableOpacity>
{/* ********************************************************************** */}
<TouchableOpacity style={styles.suggestionPhotographer}>
            <Image
              source={Images.nag2}
              style={styles.imagePhoto}
            />
            <View style={styles.content}>
              <Text style={styles.name}>Môn Thúc</Text>
              <View style={styles.address}>
                <Image
                  source={Icons.address}
                  style={{ width: 16, height: 16 }}
                />
                <Text>101b Le Huu Trac</Text>
              </View>
              <Text style={styles.description}>
                Tạo ra các sản phẩm độc đáo, những sáng tạo trong cách tạo dáng,
                chụp, hiệu ứng,…
              </Text>
            </View>
          </TouchableOpacity>
{/* ********************************************************************** */}
<TouchableOpacity style={styles.suggestionPhotographer}>
            <Image
              source={Images.nag2}
              style={styles.imagePhoto}
            />
            <View style={styles.content}>
              <Text style={styles.name}>Môn Thúc</Text>
              <View style={styles.address}>
                <Image
                  source={Icons.address}
                  style={{ width: 16, height: 16 }}
                />
                <Text>101b Le Huu Trac</Text>
              </View>
              <Text style={styles.description}>
                Tạo ra các sản phẩm độc đáo, những sáng tạo trong cách tạo dáng,
                chụp, hiệu ứng,…
              </Text>
            </View>
          </TouchableOpacity>
{/* ********************************************************************** */}
<TouchableOpacity style={styles.suggestionPhotographer}>
            <Image
              source={Images.nag2}
              style={styles.imagePhoto}
            />
            <View style={styles.content}>
              <Text style={styles.name}>Môn Thúc</Text>
              <View style={styles.address}>
                <Image
                  source={Icons.address}
                  style={{ width: 16, height: 16 }}
                />
                <Text>101b Le Huu Trac</Text>
              </View>
              <Text style={styles.description}>
                Tạo ra các sản phẩm độc đáo, những sáng tạo trong cách tạo dáng,
                chụp, hiệu ứng,…
              </Text>
            </View>
          </TouchableOpacity>
{/* ********************************************************************** */}
        </ScrollView>
      </ScrollView>
    );
  }
}

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
  },
  suggestionPhotographer: {
    width: screenWidth,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginBottom: 10,
    borderRadius: 10,
  },
  content:{
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
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  suggestion: {
    flex: 1,
    marginLeft: 10,
  },
});
