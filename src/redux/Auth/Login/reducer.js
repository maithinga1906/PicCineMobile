// import * as LoginType from './actionType';

// const init = {
//   data: [],
//   error: null,
//   token: null,
//   loginLoading: false,
//   changeBottomTab: false,
//   reRender: true,
// };
// const loginReducer = (state = init, action) => {
//   switch (action.type) {
//     case LoginType.LOGIN:
//       return { ...state, loginLoading: true };
//     case LoginType.LOGIN_SUCCESS:
//       return {
//         ...state,
//         data: action.payload,
//         token: action.token,
//         loginLoading: false,
//         changeBottomTab: true,
//         reRender: true,
//       };
//     case LoginType.LOGIN_FAIL:
//       return {
//         ...state,
//         error: action.error,
//         loginLoading: false,
//         changeBottomTab: false,
//       };
//     case LoginType.LOGOUT:
//       return {
//         ...state,
//         token: null,
//         loginLoading: false,
//         changeBottomTab: false,
//         reRender: false,
//       };
//     default:
//       return state;
//   }
// };

// export default loginReducer;

import Immutable from 'seamless-immutable';
import { makeReducerCreator } from '../../../utils/ReduxUtils';
import { LoginTypes } from './actions';

export const INITIAL_STATE = Immutable({
  loadingLogin: false,
  errorLogin: null,
  loginResponse: null,
  token: null,
  loginType: '',
});

export const userLogin = (state, { response }) =>
  state.merge({ loadingLogin: true, errorLogin: null });

export const userLoginSuccess = (state, { response }) =>
  state.merge({
    loadingLogin: false,
    loginResponse: response.data,
    token: response.token,
    loginType: 'email',
  });
export const userLoginFailure = (state, { error }) =>
  state.merge({ loadingLogin: false, errorLogin: error });

const reducer = makeReducerCreator(INITIAL_STATE, {
  [LoginTypes.USER_LOGIN]: userLogin,
  [LoginTypes.USER_LOGIN_SUCCESS]: userLoginSuccess,
  [LoginTypes.USER_LOGIN_FAILURE]: userLoginFailure,
});

export default reducer;
