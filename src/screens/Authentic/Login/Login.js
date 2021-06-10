import React, { useState } from 'react';
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
import { useDispatch, useSelector } from 'react-redux';
import InputItem from '../../../component/register/inputItem';
import Images from '../../../themes/images';
import { registerScreen } from '../../../navigation/pushScreens';
import Color from '../../../themes/colors';
import Icons from '../../../themes/icons';
const screenWidth = Dimensions.get('screen').width;

const Login = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [hidenVal, setHidenVal] = useState(false);

  const dispatch = useDispatch();
  const onSignUp = () => {
    registerScreen();
  };
  const loading = useSelector((state) => state.login.loadingLogin);
  const onLogin = () => {
    const data = {
      username: email,
      password: password,
    };
    dispatch(LoginTypes.userLogin(data));
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.formName}>Đăng nhập</Text>
      </View>
      <View style={styles.logoForm}>
        <Image source={Images.logo} style={styles.logo} />
      </View>

      <InputItem
        value={'Tên đăng nhập'}
        styles={styles.textInput}
        onChangeText={(val) => setEmail(val)}
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
      <TouchableOpacity style={styles.forgotPassButton}>
        <Text style={{ color: 'red' }}>Quên Mật Khẩu</Text>
      </TouchableOpacity>

      <View style={{ alignItems: 'center' }}>
        <TouchableOpacity style={styles.loginButton} onPress={() => onLogin()}>
          <Text style={styles.titleBut}>Đăng nhập</Text>
        </TouchableOpacity>
      </View>
      {loading}
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
    paddingVertical: 10,
    paddingHorizontal: 30,
    backgroundColor: 'white',
    alignContent: 'center',
    paddingTop: 50,
  },
  header: {
    flexDirection: 'row',
    marginTop: 0,
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
    marginLeft: 4,
  },
  forgotPassButton: {
    color: 'red',
    marginTop: 10,
    marginBottom: 20,
  },
  logo: {
    width: 125,
    height: 150,
  },
  logoForm: {
    marginTop: 40,
    marginBottom: 20,
    alignItems: 'center',
  },
  formName: {
    fontSize: 24,
    alignContent: 'center',
    textAlign: 'center',
    width: '100%',
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
  titleBut: {
    textAlign: 'center',
    color: 'black',
    fontWeight: 'bold',
  },
  eye: {
    marginLeft: 120,
    marginTop: 15,
  },
  inputText: {
    paddingLeft: 15,
    width: 200,
    color: 'black',
  },
});

export default Login;
