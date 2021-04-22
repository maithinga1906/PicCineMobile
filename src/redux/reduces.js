import { combineReducers } from 'redux';
import login from './Auth/Login/reducer';
import app from './AppRedux/reducer';
import registerReducer from './Auth/Register/reducer';
import info from './Auth/InfoRedux/reducer';
import homeReducer from './HomeRedux/reducer';

const rootReducer = combineReducers({
  app,
  login,
  registerReducer,
  homeReducer,
  info,
});

export default rootReducer;
