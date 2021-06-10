import { takeLatest, put, call } from 'redux-saga/effects';
import BookingActions, { BookTypes } from './actions';
import { showBookingApi, bookApi, cancelBookApi } from '../../api/booking';

export function* showBookingSaga({ id }) {
  try {
    const response = yield call(showBookingApi, id);
    yield put(BookingActions.showBookingSuccess(response.data));
  } catch (error) {
    yield put(BookingActions.showBookingFailure(error));
  }
}
// ================================================
export function* bookingSaga({ data }) {
  try {
    const response = yield call(bookApi, data);
    yield put(BookingActions.bookingSuccess(response));
  } catch (error) {
    yield put(BookingActions.bookingFailure(error));
  }
}
// =================================================
export function* cancelBookingSaga({ id, data }) {
  try {
    const response = yield call(cancelBookApi, id, data);
    yield put(BookingActions.cancelBookingSuccess(response));
  } catch (error) {
    yield put(BookingActions.cancelBookingFailure(error));
  }
}
const bookingSagas = () => [
  takeLatest(BookTypes.SHOW_BOONG, showBookingSaga),
  takeLatest(BookTypes.BOOKING, bookingSaga),
  takeLatest(BookTypes.CANCEL_BOOKING, cancelBookingSaga),
];

export default bookingSagas();
