/* eslint-disable no-alert */

import { put, call, takeLatest } from 'redux-saga/effects';
import { startup } from '../../AppRedux/actions';
import { userInfoApi } from '../../../api/auth';
import { homeScreen } from '../../../navigation/pushScreens';
import { InfoTypes } from './actions';
import InfoActions from './actions';

export function* getInfoSaga() {
  try {
    const response = yield call(userInfoApi);
    const newResponse = {
      data: response.data,
    };
    yield put(InfoActions.getStoryHomeSuccess(newResponse));
    yield homeScreen;
  } catch (error) {
    console.log(error);
    yield put(InfoActions.getStoryHomeFailure(error));
  }
}

const infoSagas = () => [takeLatest(InfoTypes.USER_INFO, getInfoSaga)];

export default infoSagas();
