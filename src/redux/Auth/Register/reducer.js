import Immutable from 'seamless-immutable';
import { makeReducerCreator } from '../../../utils/ReduxUtils';
import { RegisterTypes } from './actions';

export const INITIAL_STATE = Immutable({
  loadingRegister: false,
  errorRegister: null,
  registerResponse: null,
  token: null,
  registerType: '',
});

export const userRegister = (state, { response }) =>
  state.merge({ loadingRegister: true, errorRegister: null });

export const userRegisterSuccess = (state, { response }) =>
  state.merge({
    loadingRegister: false,
    registerResponse: response.data,
    token: response.token,
    registerType: 'email',
  });
export const userRegisterFailure = (state, { error }) =>
  state.merge({ loadingRegister: false, errorRegister: error });

const registerReducer = makeReducerCreator(INITIAL_STATE, {
  [RegisterTypes.USER_REGISTER]: userRegister,
  [RegisterTypes.USER_REGISTER_SUCCESS]: userRegisterSuccess,
  [RegisterTypes.USER_REGISTER_FAILURE]: userRegisterFailure,
});

export default registerReducer;
