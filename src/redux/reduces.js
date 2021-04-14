/* eslint-disable prettier/prettier */
import {combineReducers} from 'redux';

import loginReducer from './Auth/Login/reducer';
import app from './AppRedux/reducer'
import registerReducer from './Auth/Register/reducer';

const rootReducer = combineReducers({
    app,
    loginReducer,
    registerReducer,

});

export default rootReducer;
