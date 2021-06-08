import { combineReducers } from 'redux';
import login from './Auth/Login/reducer';
import app from './AppRedux/reducer';
import registerReducer from './Auth/Register/reducer';
import info from './Auth/InfoRedux/reducer';
import homeReducer from './HomeRedux/reducer';
import categoryReducer from './Categories/reducer';
import bookingReducer from './BookingRedux/reducer';
import searchReducer from './Search/reducer';

const rootReducer = combineReducers({
  app,
  login,
  registerReducer,
  homeReducer,
  info,
  categoryReducer,
  bookingReducer,
  searchReducer,
});

export default rootReducer;
