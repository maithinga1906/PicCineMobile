/* eslint-disable no-undef */
/* eslint-disable no-dupe-keys */
/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import LoginTypes from '../../../redux/Auth/Login/actions';
import { validateEmail } from '../../../utils/ReduxUtils';
import { useSelector, useDispatch } from 'react-redux';
import InputItem from '../../../component/register/inputItem';
import Images from '../../../themes/images';
import { loginScreen, registerScreen } from '../../../navigation/pushScreens';

const Login = () => {
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
        <Image source={Images.imgCancel} style={styles.closeForm} />
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

      <View style={{ alignItems: 'center' }}>
        <TouchableOpacity style={styles.loginButton} onPress={() => onLogin()}>
          <Text style={{ textAlign: 'center' }}>Đăng nhập</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.button}>
        <TouchableOpacity style={styles.registerButton} onPress={() => onSignUp()}>
          <Text style={{ color: 'white', textAlign: 'center' }}>Đăng ký</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.forgotPassButton} onPress={() => onForgotPassword()}>
          <Text style={{ color: 'white', textAlign: 'center' }}>Quên Mật Khẩu</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
Login.options = {
  topBar: {
    visible: true,
  },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    paddingVertical: 10,
    paddingHorizontal: 30,
    backgroundColor: 'white',
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
    justifyContent: 'space-around',
    marginTop: 20,
  },
  loginButton: {
    backgroundColor: '#00ccff',
    borderColor: '#00ccff',
    borderWidth: 1,
    width: 140,
    height: 50,
    justifyContent: 'center',
    alignContent: 'center',
    textAlign: 'center',
    borderRadius: 15,
  },
  registerButton: {
    backgroundColor: '#41B8C1',
    borderColor: '#41B8C1',
    borderWidth: 1,
    borderRadius: 15,
    width: 140,
    height: 50,
    justifyContent: 'center',
    alignContent: 'center',
    marginLeft: 5,
  },
  forgotPassButton: {
    backgroundColor: '#1ab2ff',
    borderColor: '#1ab2ff',
    borderWidth: 1,
    borderRadius: 15,
    width: 140,
    height: 50,
    justifyContent: 'center',
    alignContent: 'center',
    marginLeft: 5,
  },
  closeForm: {
    width: 15,
    height: 15,
    marginTop: 20,
  },
  logo: {
    width: 200,
    height: 200,
  },
  logoForm: {
    alignItems: 'center',
  },
  formName: {
    fontSize: 30,
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
});

export default Login;
