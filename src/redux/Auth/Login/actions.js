// import * as LoginTypes from './actionType';

// export const login = (data) => ({
//   type: LoginTypes.LOGIN,
//   payload: data,
// });
// export const loginSuccess = (response, token) => ({
//   type: LoginTypes.LOGIN_SUCCESS,
//   payload: response,
//   token: token,
// });
// export const loginFail = (error) => ({
//   type: LoginTypes.LOGIN_FAIL,
//   payload: error,
// });
// // export const logout = () => ({
// //   type: LoginTypes.LOGOUT,
// // });

import { makeActionCreator, makeConstantCreator } from '../../../utils/ReduxUtils';

export const LoginTypes = makeConstantCreator(
  'USER_LOGIN',
  'USER_LOGIN_SUCCESS',
  'USER_LOGIN_FAILURE',
  'USER_LOGOUT',
);

const userLogin = (data) => makeActionCreator(LoginTypes.USER_LOGIN, { data });
const userLoginSuccess = (response) =>
  makeActionCreator(LoginTypes.USER_LOGIN_SUCCESS, { response });
const userLoginFailure = (error) => makeActionCreator(LoginTypes.USER_LOGIN_FAILURE, { error });
export default {
  userLogin,
  userLoginSuccess,
  userLoginFailure,
};

