/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
// import React, { Component } from 'react';
// import {
//   StyleSheet,
//   View,
//   ScrollView,
//   Text,
//   Dimensions,
//   TouchableOpacity,
// } from 'react-native';
// import Images from '../../../themes/images';
// import Color from '../../../themes/colors';
// import Icons from '../../../themes/icons';
// import TextInputComponent from '../../../component/textInputComponent';

// const screenWidth = Dimensions.get('screen').width;

// const Register = () => {
//     return (
//       <ScrollView>
//         <View>
//           {/* <Image source={Icons.back} /> */}

//           <View style={styles.logo}>
//             {/* <Image source={Images.logo} /> */}
//             <Text style={styles.title}>Đăng Ký</Text>
//           </View>
//           <View>
//             <TextInputComponent
//               icon={Icons.user}
//               Placeholder="Tên người dùng"
//             />
//             <TextInputComponent icon={Icons.lock} Placeholder="Mật khẩu" />
//             <TextInputComponent
//               icon={Icons.confirm}
//               Placeholder="Nhập lại mật khẩu"
//             />
//             <TextInputComponent
//               icon={Icons.phone}
//               Placeholder="Số điện thoại"
//             />
//             <TextInputComponent icon={Icons.email} Placeholder="Email" />
//           </View>

//           <View
//             style={{ width: screenWidth, alignItems: 'center', marginTop: 25 }}
//           >
//             <TouchableOpacity style={styles.login}>
//               <Text style={styles.loginText}>Đăng Ký</Text>
//             </TouchableOpacity>
//           </View>

//         </View>
//       </ScrollView>
//     );
//   };
//   Register.options = {
//     topBar: {
//       height: 0,
//     },
//   };
// export default Register;

// const styles = StyleSheet.create({
//   logo: {
//     alignItems: 'center',
//     width: screenWidth,
//   },
//   title: {
//     fontSize: 30,
//     fontWeight: 'bold',
//     color: Color.title,
//   },
//   input: {
//     width: screenWidth - 70,
//     borderColor: '#3C574D',
//     borderWidth: 2,
//     borderRadius: 10,
//     marginLeft: 10,
//   },
//   username: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginTop: 35,
//   },
//   forgotPW: {
//     marginLeft: 60,
//   },
//   forgotText: {
//     color: Color.title,
//   },
//   login: {
//     width: screenWidth / 1.5,
//     height: 45,
//     borderColor: '#3C574D',
//     borderWidth: 2,
//     borderRadius: 30,
//     backgroundColor: '#3C574D',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   loginText: {
//     color: '#F4B9A7',
//     fontWeight: 'bold',
//     fontSize: 15,
//   },
//   register: {
//     width: screenWidth / 3,
//     height: 35,
//     borderColor: '#80BD5E',
//     borderWidth: 2,
//     borderRadius: 30,
//     backgroundColor: '#80BD5E',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   registerText: {
//     color: '#f98866',
//     fontWeight: 'bold',
//     fontSize: 12,
//   },
// });


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

import { Navigation } from 'react-native-navigation';
import InputItem from '../../../component/register/inputItem';
import Images from '../../../themes/images';
import { userRegister } from '../../../redux/Auth/Register/actions';
import { useDispatch } from 'react-redux';
import { loginScreen } from '../../../navigation/pushScreens';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [hidenVal] = useState(false);

  const dispatch = useDispatch();

  const onRegister = () => {
    const data = {
      username: username,
      password: password,
      id_role: 2,
      phone: phone,
      email: email,
    };
    dispatch(userRegister(data));
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image source={Images.imgCancel} style={styles.closeForm} />
        <Text style={styles.formName}>SignUp</Text>
      </View>

      <InputItem
        value={'Username*'}
        styles={styles.textInput}
        onChangeText={(val) => setUsername(val)}
      />
      <View>
        <Text> Mật khẩu*</Text>
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

      <View>
        <Text> Xác Nhận Mật khẩu*</Text>
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
      <InputItem value={'Phone*'} styles={styles.textInput} onChangeText={(val) => setPhone(val)} />
      <InputItem value={'Email*'} styles={styles.textInput} onChangeText={(val) => setEmail(val)} />


      <View style={styles.button}>
        <TouchableOpacity style={styles.registerButton} onPress={() => onRegister()}>
          <Text style={{ color: 'white', textAlign: 'center' }}>Đăng ký</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonLog}>
        <TouchableOpacity>
          <Text>Đã có tài khoản</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.loginButton}
          onPress={() =>
            loginScreen()
          }
        >
          <Text style={{ textAlign: 'center' }}>Đăng nhập</Text>
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
    color: 'black',
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
  loginButton: {
    borderColor: '#41B8C1',
    borderWidth: 1,
    width: 100,
    height: 40,
    justifyContent: 'center',
    alignContent: 'center',
  },
  registerButton: {
    backgroundColor: '#41B8C1',
    borderColor: '#41B8C1',
    borderWidth: 1,
    width: 150,
    height: 50,
    justifyContent: 'center',
    alignContent: 'center',
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
});
export default SignUp;

