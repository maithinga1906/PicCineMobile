/* eslint-disable no-undef */
/* eslint-disable no-dupe-keys */
/* eslint-disable react-native/no-inline-styles */
import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
  Dimensions,
} from 'react-native';
import LoginTypes from '../../../redux/Auth/Login/actions';
import { validateEmail } from '../../../utils/ReduxUtils';
import { useSelector, useDispatch } from 'react-redux';
import InputItem from '../../../component/register/inputItem';
import Images from '../../../themes/images';
import { loginScreen, registerScreen } from '../../../navigation/pushScreens';
import Color from '../../../themes/colors';
import { Navigation } from 'react-native-navigation';
const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

const Login = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [hidenVal] = useState(false);

  const dispatch = useDispatch();
  onSignUp = () => {
    console.log(2);
    registerScreen();
  };

  onLogin = () => {
    const data = {
      username: email,
      password: password,
    };
    dispatch(LoginTypes.userLogin(data));
  };

  onForgotPassword = () => {
    NavigationUtils.push({
      screen: 'ForgotPassword',
    });
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.formName}>Đăng nhập</Text>
      </View>
      <View style={styles.logoForm}>
        <Image source={Images.logo} style={styles.logo} />
      </View>

      <InputItem value={'Email*'} styles={styles.textInput} onChangeText={(val) => setEmail(val)} />

      <View>
        <Text>Mật khẩu *</Text>
        <TouchableOpacity>
          <Image
            source={hidenVal ? Images.imgShowPwd : Images.imgNotShowPwd}
            style={styles.eyeImage2}
          />
        </TouchableOpacity>
        <TextInput
          secureTextEntry={true}
          style={styles.textInput}
          onChangeText={(val) => setPassword(val)}
        />
      </View>
      <TouchableOpacity style={styles.forgotPassButton} onPress={() => onForgotPassword()}>
        <Text style={{ color: 'red' }}>Quên Mật Khẩu</Text>
      </TouchableOpacity>

      <View style={{ alignItems: 'center' }}>
        <TouchableOpacity style={styles.loginButton} onPress={() => onLogin()}>
          <Text style={styles.titleBut}>Đăng nhập</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.button}>
        <Text>Chưa có tài khoản?</Text>
        <TouchableOpacity style={styles.registerButton} onPress={() => onSignUp()}>
          <Text style={styles.titleBut}>Đăng ký</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: 50,
    paddingVertical: 10,
    paddingHorizontal: 30,
    backgroundColor: 'white',
    alignContent: 'center',
  },
  header: {
    flexDirection: 'row',
    marginTop: 0,
  },
  main: {
    alignContent: 'center',
    justifyContent: 'center',
    marginTop: 20,
    paddingVertical: 5,
  },
  textInput: {
    marginTop: 10,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 5,
    borderRadius: 15,
    marginBottom: 10,
    color: 'black',
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
    alignItems: 'center',
  },
  loginButton: {
    backgroundColor: Color.but,
    borderColor: Color.but,
    borderWidth: 1,
    width: screenWidth / 1.5,
    height: 50,
    justifyContent: 'center',
    alignContent: 'center',
    textAlign: 'center',
    borderRadius: 15,
  },
  registerButton: {
    height: 20,
    justifyContent: 'center',
    // alignContent: 'center',
    marginLeft: 4,
    // backgroundColor: '#1ab2ff',
    // borderColor: '#1ab2ff',
    // borderWidth: 1,
    // borderRadius: 15,
  },
  forgotPassButton: {
    color: 'red',
    // marginLeft: 5,
  },
  closeForm: {
    width: 15,
    height: 15,
    marginTop: 20,
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoForm: {
    alignItems: 'center',
  },
  formName: {
    fontSize: 24,
    alignContent: 'center',
    textAlign: 'center',
    width: '100%',
  },
  textPolicy: {
    fontSize: 16,
    marginTop: 8,
  },
  searchSection: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  searchIcon: {
    padding: 10,
  },
  input: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    backgroundColor: '#fff',
    color: '#424242',
  },
  eyeImage2: {
    position: 'absolute',
    width: 20,
    height: 15,
    marginLeft: 310,
    marginTop: 30,
  },
  titleBut: {
    textAlign: 'center',
    color: 'black',
    fontWeight: 'bold',
  },
});

export default Login;
