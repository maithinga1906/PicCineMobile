import AsyncStorage from '@react-native-async-storage/async-storage';
import Immutable from 'seamless-immutable';
import { makeReducerCreator } from '../../../utils/ReduxUtils';
import { LoginTypes } from './actions';

export const INITIAL_STATE = Immutable({
  loadingLogin: false,
  errorLogin: null,
  loginResponse: null,
  token: null,
  loginType: '',
  info: null,
});

export const userLogin = (state, { response }) =>
  state.merge({ loadingLogin: true, errorLogin: null });

export const userLoginSuccess = (state, { response }) =>
  state.merge({
    loadingLogin: true,
    loginResponse: response.data,
    token: response.token,
  });
export const userLoginFailure = (state, { error }) =>
  state.merge({ loadingLogin: false, errorLogin: error });

/************************************************************* */
export const getÌnoSuccess = (state, { response }) =>
  state.merge({
    info: response,
    loadingLogin: false,
    errorLogin: false,
  });
export const getCategoryFailure = (state, { error }) =>
  state.merge({ errorLogin: error, loadingLogin: false });

const userReducer = makeReducerCreator(INITIAL_STATE, {
  [LoginTypes.USER_LOGIN]: userLogin,
  [LoginTypes.USER_LOGIN_SUCCESS]: userLoginSuccess,
  [LoginTypes.USER_LOGIN_FAILURE]: userLoginFailure,
});

export default userReducer;
