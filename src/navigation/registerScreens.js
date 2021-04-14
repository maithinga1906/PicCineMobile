/* eslint-disable no-undef */
import React from 'react';
import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';
import store from '../redux/store';
import Intro from '../screens/Authentic/Intro/Intro';
import Login from '../screens/Authentic/Login/Login';
import Register from '../screens/Authentic/Register/Register';
import Homepage from '../screens/Home';
import Confirm from '../screens/Authentic/ForgotPass/Confirm';
import FillEmal from '../screens/Authentic/ForgotPass/FillEmal';
import Noti from '../screens/Notification/Noti';
import Detail from '../screens/photoDetail/Detail';
import Payment from '../screens/Booking/Payment';
import SetCalendar from '../screens/Booking/SetCalendar';
import Transfer from '../screens/Booking/Transfer';
import Comment from '../screens/photoDetail/Comment';
import Info from '../screens/photoDetail/Info';
import Service from '../screens/photoDetail/Service';
import Posts from '../screens/Post/Posts';
import Head from '../screens/Profile/head';
import Profile from '../screens/Profile/Profile';
import QR from '../screens/Profile/QR';
import Wishlist from '../screens/Wishlist';

function ReduxProvider(Component) {
  return (props) => (
    <Provider store={store}>
      <Component {...props} />
    </Provider>
  );
}

export function registerScreens() {
  Navigation.registerComponent(
    'Intro',
    () => ReduxProvider(Intro),
    () => Intro,
  );
  Navigation.registerComponent(
    'Login',
    () => ReduxProvider(Login),
    () => Login,
  );
  Navigation.registerComponent(
    'Register',
    () => ReduxProvider(Register),
    () => Register,
  );
  Navigation.registerComponent(
    'Homepage',
    () => ReduxProvider(Homepage),
    () => Homepage,
  );
  Navigation.registerComponent(
    'Detail',
    () => ReduxProvider(Detail),
    () => Detail,
  );
  Navigation.registerComponent(
    'Confirm',
    () => ReduxProvider(Confirm),
    () => Confirm,
  );
  Navigation.registerComponent(
    'FillEmal',
    () => ReduxProvider(FillEmal),
    () => FillEmal,
  );
  Navigation.registerComponent(
    'Noti',
    () => ReduxProvider(Noti),
    () => Noti,
  );
  Navigation.registerComponent(
    'Payment',
    () => ReduxProvider(Payment),
    () => Payment,
  );
  Navigation.registerComponent(
    'SetCalendar',
    () => ReduxProvider(SetCalendar),
    () => SetCalendar,
  );
  Navigation.registerComponent(
    'Transfer',
    () => ReduxProvider(Transfer),
    () => Transfer,
  );
  Navigation.registerComponent(
    'Comment',
    () => ReduxProvider(Comment),
    () => Comment,
  );
  Navigation.registerComponent(
    'Info',
    () => ReduxProvider(Info),
    () => Info,
  );
  Navigation.registerComponent(
    'Service',
    () => ReduxProvider(Service),
    () => Service,
  );
  Navigation.registerComponent(
    'Posts',
    () => ReduxProvider(Posts),
    () => Posts,
  );
  Navigation.registerComponent(
    'Head',
    () => ReduxProvider(Head),
    () => Head,
  );
  Navigation.registerComponent(
    'Profile',
    () => ReduxProvider(Profile),
    () => Profile,
  );
  Navigation.registerComponent(
    'QR',
    () => ReduxProvider(QR),
    () => QR,
  );
  Navigation.registerComponent(
    'Wishlist',
    () => ReduxProvider(Wishlist),
    () => Wishlist,
  );
}
