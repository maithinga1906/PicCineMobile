import { makeActionCreator, makeConstantCreator } from '../../../utils/ReduxUtils';

export const RegisterTypes = makeConstantCreator(
  'USER_REGISTER',
  'USER_REGISTER_SUCCESS',
  'USER_REGISTER_FAILURE',
);

export const userRegister = (data) => makeActionCreator(RegisterTypes.USER_REGISTER, { data });

export const userRegisterSuccess = (response) =>
  makeActionCreator(RegisterTypes.USER_REGISTER_SUCCESS, { response });

export const userRegisterFailure = (error) =>
  makeActionCreator(RegisterTypes.USER_REGISTER_FAILURE, { error });

// export default {
//   userRegister,
//   userRegisterSuccess,
//   userRegisterFailure,
// };
