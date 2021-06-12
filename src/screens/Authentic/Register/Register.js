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

import InputItem from '../../../component/register/inputItem';
import Icons from '../../../themes/icons';
import { userRegister } from '../../../redux/Auth/Register/actions';
import { useDispatch } from 'react-redux';
import { loginScreen } from '../../../navigation/pushScreens';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [confirm, setConfirm] = useState('');
  const [hidenVal, setHidenVal] = useState(false);

  const dispatch = useDispatch();
  const onLogin = () => {
    loginScreen();
  };
  const onRegister = () => {
    if (password === confirm) {
      const data = {
        username: username,
        password: password,
        id_role: 2,
        phone: phone,
        email: email,
      };
      dispatch(userRegister(data));
    } else {
      alert('Mật khẩu xác nhận không đúng');
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.formName}>Đăng Ký</Text>
      </View>

      <InputItem
        value={'Tên đăng nhập'}
        styles={styles.textInput}
        onChangeText={(val) => setUsername(val)}
      />
      <View>
        <Text>
          Mật khẩu <Text style={{ color: 'red' }}>*</Text>
        </Text>
        <View style={styles.textInput}>
          <TextInput
            secureTextEntry={hidenVal}
            onChangeText={(val) => setPassword(val)}
            style={styles.inputText}
          />
          <TouchableOpacity
            onPress={() => {
              setHidenVal(!hidenVal);
            }}
            style={styles.eye}
          >
            {hidenVal ? <Image source={Icons.eye} /> : <Image source={Icons.eye} />}
          </TouchableOpacity>
        </View>
      </View>

      <View>
        <Text>
          Xác Nhận Mật khẩu <Text style={{ color: 'red' }}>*</Text>
        </Text>
        <View style={styles.textInput}>
          <TextInput
            secureTextEntry={hidenVal}
            onChangeText={(val) => setConfirm(val)}
            style={styles.inputText}
          />
          <TouchableOpacity
            onPress={() => {
              setHidenVal(!hidenVal);
            }}
            style={styles.eye}
          >
            {hidenVal ? <Image source={Icons.eye} /> : <Image source={Icons.eye} />}
          </TouchableOpacity>
        </View>
      </View>
      <InputItem
        value={'Số điện thoại'}
        styles={styles.textInput}
        onChangeText={(val) => setPhone(val)}
      />
      <InputItem value={'Email'} styles={styles.textInput} onChangeText={(val) => setEmail(val)} />

      <View style={styles.button}>
        <TouchableOpacity style={styles.registerButton} onPress={() => onRegister()}>
          <Text style={{ color: 'white', textAlign: 'center' }}>Đăng ký</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.button1}>
        <Text>Bạn đã có tài khoản?</Text>
        <TouchableOpacity style={styles.loginButton} onPress={() => onLogin()}>
          <Text style={styles.titleBut}>Đăng Nhập</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 30,
    backgroundColor: 'white',
    paddingTop: 20,
  },
  header: {
    flexDirection: 'row',
    marginTop: 0,
    marginBottom: 25,
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
    color: 'black',
    flexDirection: 'row',
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  buttonLog: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    alignItems: 'center',
  },
  registerButton: {
    backgroundColor: '#41B8C1',
    borderColor: '#41B8C1',
    borderWidth: 1,
    width: 150,
    height: 50,
    justifyContent: 'center',
    alignContent: 'center',
    borderRadius: 10,
  },
  closeForm: {
    width: 15,
    height: 15,
    marginTop: 20,
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
    width: 15,
    height: 15,
    position: 'absolute',
    marginLeft: 330,
    marginTop: 30,
  },
  button1: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
    alignItems: 'center',
  },
  loginButton: {
    height: 20,
    justifyContent: 'center',
    marginLeft: 4,
  },
  titleBut: {
    textAlign: 'center',
    color: 'black',
    fontWeight: 'bold',
  },
  eye: {
    marginLeft: 100,
    marginTop: 15,
  },
  inputText: {
    paddingLeft: 15,
    width: 170,
    color: 'black',
  },
});
export default SignUp;
