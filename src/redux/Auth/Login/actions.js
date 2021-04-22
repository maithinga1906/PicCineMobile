import { makeActionCreator, makeConstantCreator } from '../../../utils/ReduxUtils';

export const LoginTypes = makeConstantCreator(
  'USER_LOGIN',
  'USER_LOGIN_SUCCESS',
  'USER_LOGIN_FAILURE',
  'USER_LOGOUT',

  'USER_INFO',
  'USER_INFO_SUCCESS',
  'USER_INFO_FAILURE',
);

const getInfoUser = () => makeActionCreator(LoginTypes.USER_INFO);
const getInfoUserSuccess = (response) =>
  makeActionCreator(LoginTypes.USER_INFO_SUCCESS, { response });
const getInfoUserFailure = (error) => makeActionCreator(LoginTypes.USER_INFO_FAILURE, { error });

/************************************************** */

const userLogin = (data) => makeActionCreator(LoginTypes.USER_LOGIN, { data });
const userLoginSuccess = (response) =>
  makeActionCreator(LoginTypes.USER_LOGIN_SUCCESS, { response });
const userLoginFailure = (error) => makeActionCreator(LoginTypes.USER_LOGIN_FAILURE, { error });
export default {
  userLogin,
  userLoginSuccess,
  userLoginFailure,
  getInfoUser,
};
