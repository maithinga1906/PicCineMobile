/* eslint-disable no-alert */

import { put, call, takeLatest } from 'redux-saga/effects';
import LoginActions, { LoginTypes } from './actions';
import { startup } from '../../AppRedux/actions';
import { userLoginApi, userInfoApi } from '../../../api/auth';
import { homeScreen } from '../../../navigation/pushScreens';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function* userLoginSaga({ data }) {
  try {
    const response = yield call(userLoginApi, data);
    const newResponse = {
      data: response.data,
      token: response.data.token,
    };
    yield put(LoginActions.userLoginSuccess(newResponse));
    // homeScreen();
    yield AsyncStorage.setItem('token', response.data.token);
    yield put(startup());
  } catch (error) {
    alert('có thể bạn đã nhập sai tên đăng nhập hoặc mật khẩu');
    yield put(LoginActions.userLoginFailure(error));
  }
}

export function* getStoryHomeSaga() {
  try {
    const response = yield call(userInfoApi);
    const newResponse = {
      data: response.data,
    };
    yield put(LoginActions.getStoryHomeSuccess(newResponse));
    yield homeScreen();
  } catch (error) {
    yield put(LoginActions.getStoryHomeFailure(error));
  }
}

export function* userLogout() {
  yield AsyncStorage.clear();
  yield AsyncStorage.setItem('skip', JSON.stringify(true));
  yield put(startup());
}
const loginSagas = () => [
  takeLatest(LoginTypes.USER_LOGIN, userLoginSaga),
  takeLatest(LoginTypes.USER_LOGOUT, userLogout),
];

export default loginSagas();
