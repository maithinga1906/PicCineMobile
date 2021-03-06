import { all } from 'redux-saga/effects';
import appSagas from './AppRedux/sagas';
import loginSagas from './Auth/Login/sagas';
import registerSagas from './Auth/Register/sagas';
import infoSagas from './Auth/InfoRedux/sagas';
import homeSagas from './HomeRedux/sagas';
import categorySagas from './Categories/sagas';
import bookingSagas from './BookingRedux/sagas';
import searchSagas from './Search/sagas';

export default function* root() {
  yield all([
    ...appSagas,
    ...loginSagas,
    ...registerSagas,
    ...homeSagas,
    ...infoSagas,
    ...categorySagas,
    ...bookingSagas,
    ...searchSagas,
  ]);
}
