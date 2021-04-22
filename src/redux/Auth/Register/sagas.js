/* eslint-disable no-alert */
import { put, call, takeLatest } from 'redux-saga/effects';
import { userRegisterFailure, userRegisterSuccess, RegisterTypes } from './actions';
import { startup } from '../../AppRedux/actions';
import { userRegisterApi } from '../../../api/auth';
import { homeScreen } from '../../../navigation/pushScreens';

export function* userRegisterSaga({ data }) {
  console.log(data);
  try {
    const response = yield call(userRegisterApi, data);
    const newResponse = {
      data: response.data,
      token: response.data.token,
    };
    yield put(userRegisterSuccess(newResponse));
    homeScreen();
    yield put(startup());
  } catch (error) {
    console.log(error);
    yield put(userRegisterFailure(error));
  }
}

const registerSagas = () => [takeLatest(RegisterTypes.USER_REGISTER, userRegisterSaga)];

export default registerSagas();
