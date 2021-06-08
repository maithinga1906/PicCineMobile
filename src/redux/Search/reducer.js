import Immutable from 'seamless-immutable';
import { makeReducerCreator } from '../../utils/ReduxUtils';
import { SearchTypes } from './actions';

export const INITIAL_STATE = Immutable({
  loading: false,
  error: null,
  data: null,
});

export const search = (state, { response }) => state.merge({ loading: true, error: null });

export const searchSuccess = (state, { response }) =>
  state.merge({
    loading: true,
    error: null,
    data: response,
  });
export const searchFailure = (state, { error }) => state.merge({ loading: false, error: error });

const searchReducer = makeReducerCreator(INITIAL_STATE, {
  [SearchTypes.SEARCH]: search,
  [SearchTypes.SEARCH_SUCCESS]: searchSuccess,
  [SearchTypes.SEARCH_FAILURE]: searchFailure,
});

export default searchReducer;
