import { takeLatest, select } from 'redux-saga/effects';
import { AppTypes } from '../AppRedux/actions';
import http from '../../api/http';
import { homeScreen, loginScreen } from '../../navigation/pushScreens';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function* startupSaga() {
  try {
    const storeToken = yield AsyncStorage.getItem('token');
    let token = null;
    if (storeToken) {
      token = storeToken;
    } else {
      token = yield select((state) => state.login.token);
    }
    // const { token } = yield select((state) => state.login);
    http.setAuthorizationHeader(token);
    if (token) {
      homeScreen();
    } else {
      loginScreen();
    }
  } catch (error) {
    loginScreen();
  }
}
export function* makeSkipIntroSagas() {
  yield AsyncStorage.setItem('skip', JSON.stringify(true));
  yield startupSaga();
}

const appSagas = () => {
  return [
    takeLatest(AppTypes.STARTUP, startupSaga),
    takeLatest(AppTypes.MARK_SKIP_INTRO, makeSkipIntroSagas),
  ];
};

export default appSagas();
