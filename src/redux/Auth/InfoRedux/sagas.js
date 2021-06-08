import { put, call, takeLatest } from 'redux-saga/effects';
import { userInfoApi } from '../../../api/auth';
import { InfoTypes } from './actions';
import InfoActions from './actions';

export function* getInfoSaga() {
  try {
    const response = yield call(userInfoApi);
    yield put(InfoActions.getInfoUserSuccess(response.data));
  } catch (error) {
    yield put(InfoActions.getInfoUserFailure(error));
  }
}

const infoSagas = () => [takeLatest(InfoTypes.USER_INFO, getInfoSaga)];

export default infoSagas();
