import Immutable from 'seamless-immutable';
import { makeReducerCreator } from '../../../utils/ReduxUtils';
import { InfoTypes } from './actions';

export const INITIAL_STATE = Immutable({
  dataInfo: null,
  errorInfo: false,
  loadingInfo: true,
  dataTypes: null,
  errorTypes: false,
});

/************************************************************* */
export const getInfoSuccess = (state, { response }) =>
  state.merge({
    dataInfo: response.data,
    errorHome: false,
    loadingHome: false,
  });
export const getInfoFailure = (state, { error }) =>
  state.merge({ errorHome: error, loadingHome: false });

const infoReducer = makeReducerCreator(INITIAL_STATE, {
  [InfoTypes.USER_INFO_SUCCESS]: getInfoSuccess,
  [InfoTypes.USER_INFO_FAILURE]: getInfoFailure,
});

export default infoReducer;
