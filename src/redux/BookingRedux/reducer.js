import AsyncStorage from '@react-native-async-storage/async-storage';
import Immutable from 'seamless-immutable';
import { makeReducerCreator } from '../../utils/ReduxUtils';
import { BookTypes } from './actions';

export const INITIAL_STATE = Immutable({
  loading: false,
  error: null,
  dataBooking: null,
  booking: null,
});

export const showBookingSuccess = (state, { response }) =>
  state.merge({
    dataBooking: response,
    loading: false,
    error: false,
  });
export const showBookingFailure = (state, { error }) =>
  state.merge({ error: error, loading: false });

/************************************************************* */

export const booking = (state, { response }) => state.merge({ loading: true, error: null });

export const bookingSuccess = (state, { response }) =>
  state.merge({
    loading: true,
    booking: response.data,
  });
export const bookingFailure = (state, { error }) => state.merge({ loading: false, error: error });

const bookingReducer = makeReducerCreator(INITIAL_STATE, {
  [BookTypes.SHOW_BOONG_SUCCESS]: showBookingSuccess,
  [BookTypes.SHOW_BOONG_FAILURE]: showBookingFailure,

  [BookTypes.BOOKING]: booking,
  [BookTypes.BOOKING_SUCCESS]: bookingSuccess,
  [BookTypes.BOOKING_FAILURE]: bookingFailure,
});

export default bookingReducer;
