import { takeLatest, select } from 'redux-saga/effects';
import { AppTypes } from '../AppRedux/actions';
import http from '../../api/http';
import { homeScreen, loginScreen } from '../../navigation/pushScreens';

export function* startupSaga() {
  try {
    const { token } = yield select((state) => state.login);

    http.setAuthorizationHeader(token);

    if (token) {
      homeScreen();
    } else {
      loginScreen();
    }
  } catch (error) {
    loginScreen();
    console.log(error);
  }
}

const appSagas = () => {
  return [takeLatest(AppTypes.STARTUP, startupSaga)];
};

export default appSagas();
