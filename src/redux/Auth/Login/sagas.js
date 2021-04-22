/* eslint-disable no-alert */

import { put, call, takeLatest } from 'redux-saga/effects';
import LoginActions, { LoginTypes } from './actions';
import { startup } from '../../AppRedux/actions';
import { userLoginApi } from '../../../api/auth';
import { homeScreen } from '../../../navigation/pushScreens';

export function* userLoginSaga({ data }) {
  console.log(data);
  try {
    const response = yield call(userLoginApi, data);
    const newResponse = {
      data: response.data,
      token: response.data.token,
    };
    yield put(LoginActions.userLoginSuccess(newResponse));
    homeScreen();
    yield put(startup());
  } catch (error) {
    alert('có thể bạn đã nhập sai tên đăng nhập hoặc mật khẩu');
    yield put(LoginActions.userLoginFailure(error));
  }
}

const loginSagas = () => [takeLatest(LoginTypes.USER_LOGIN, userLoginSaga)];

export default loginSagas();
