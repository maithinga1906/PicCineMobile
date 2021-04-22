import Immutable from 'seamless-immutable';
import { makeReducerCreator } from '../../utils/ReduxUtils';
import { HomeTypes } from './actions';

export const INITIAL_STATE = Immutable({
  dataPopular: null,
  errorHome: false,
  loadingHome: true,
  dataRecommendation: null,
  errorTypes: false,
});

export const getPopularHomeSuccess = (state, { response }) =>
  state.merge({
    dataPopular: response,
    errorHome: false,
    loadingHome: false,
  });
export const getPopularHomeFailure = (state, { error }) =>
  state.merge({ errorHome: error, loadingHome: false });

export const getRecommendationHomeSuccess = (state, { response }) =>
  state.merge({
    dataRecommendation: response,
    errorTypes: false,
  });
export const getRecommendationHomeFailure = (state, { error }) =>
  state.merge({
    errorTypes: error,
  });

const homeReducer = makeReducerCreator(INITIAL_STATE, {
  [HomeTypes.GET_POPULAR_HOME_SUCCESS]: getPopularHomeSuccess,
  [HomeTypes.GET_POPULAR_HOME_FAILURE]: getPopularHomeFailure,
  [HomeTypes.GET_RECOMMENDATION_SUCCESS]: getRecommendationHomeSuccess,
  [HomeTypes.GET_RECOMMENDATION_FAILURE]: getRecommendationHomeFailure,
});

export default homeReducer;
