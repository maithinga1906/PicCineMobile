//import Immutable from 'seamless-immutable';
import { makeActionCreator, makeConstantCreator } from '../../utils/ReduxUtils';

export const HomeTypes = makeConstantCreator(
  'GET_POPULAR_HOME',
  'GET_POPULAR_HOME_SUCCESS',
  'GET_POPULAR_HOME_FAILURE',

  'GET_RECOMMENDATION_HOME',
  'GET_RECOMMENDATION_SUCCESS',
  'GET_RECOMMENDATION_FAILURE',
);

const getPopularHome = () => makeActionCreator(HomeTypes.GET_POPULAR_HOME);
const getPopularHomeSuccess = (response) =>
  makeActionCreator(HomeTypes.GET_POPULAR_HOME_SUCCESS, { response });
const getPopularHomeFailure = (error) =>
  makeActionCreator(HomeTypes.GET_POPULAR_HOME_FAILURE, { error });

const getRecommendationHome = () => makeActionCreator(HomeTypes.GET_RECOMMENDATION_HOME);
const getRecommendationHomeSuccess = (response) =>
  makeActionCreator(HomeTypes.GET_RECOMMENDATION_SUCCESS, { response });
const getRecommendationHomeFailure = (error) =>
  makeActionCreator(HomeTypes.GET_RECOMMENDATION_FAILURE, { error });

export default {
  getPopularHome,
  getPopularHomeSuccess,
  getPopularHomeFailure,
  getRecommendationHome,
  getRecommendationHomeSuccess,
  getRecommendationHomeFailure,
};
