import { makeActionCreator, makeConstantCreator } from '../../utils/ReduxUtils';

export const BookTypes = makeConstantCreator(
  'SHOW_BOONG',
  'SHOW_BOONG_SUCCESS',
  'SHOW_BOONG_FAILURE',

  'BOOKING',
  'BOOKING_SUCCESS',
  'BOOKING_FAILURE',

  'CANCEL_BOOKING',
  'CANCEL_BOOKING_SUCCESS',
  'CANCEL_BOOKING_FAILURE',
);

/************************************************** */

const showBooking = (id) => makeActionCreator(BookTypes.SHOW_BOONG, { id });
const showBookingSuccess = (response) =>
  makeActionCreator(BookTypes.SHOW_BOONG_SUCCESS, { response });
const showBookingFailure = (error) => makeActionCreator(BookTypes.SHOW_BOONG_FAILURE, { error });

// =====================================================

const booking = (data) => makeActionCreator(BookTypes.BOOKING, { data });
const bookingSuccess = (response) => makeActionCreator(BookTypes.BOOKING_SUCCESS, { response });
const bookingFailure = (error) => makeActionCreator(BookTypes.BOOKING_FAILURE, { error });
// =====================================================

const cancelBooking = (id, data) => makeActionCreator(BookTypes.CANCEL_BOOKING, { id, data });
const cancelBookingSuccess = (response) =>
  makeActionCreator(BookTypes.CANCEL_BOOKING_SUCCESS, { response });
const cancelBookingFailure = (error) =>
  makeActionCreator(BookTypes.CANCEL_BOOKING_FAILURE, { error });
export default {
  showBooking,
  showBookingSuccess,
  showBookingFailure,
  booking,
  bookingSuccess,
  bookingFailure,
  cancelBooking,
  cancelBookingSuccess,
  cancelBookingFailure,
};
