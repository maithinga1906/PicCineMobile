import Immutable from 'seamless-immutable';
import { makeReducerCreator } from '../../utils/ReduxUtils';
import { CategoryTypes } from './actions';

export const INITIAL_STATE = Immutable({
  categories: null,
  loading: true,
  error: false,
});

export const getCategorySuccess = (state, { response }) =>
  state.merge({
    categories: response,
    loading: false,
    error: false,
  });
export const getCategoryFailure = (state, { error }) =>
  state.merge({ error: error, loading: false });

const categoryReducer = makeReducerCreator(INITIAL_STATE, {
  [CategoryTypes.GET_CATEGORY_SUCCESS]: getCategorySuccess,
  [CategoryTypes.GET_CATEGORY_FAILURE]: getCategoryFailure,
});

export default categoryReducer;
