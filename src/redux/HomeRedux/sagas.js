import { takeLatest, put, call } from 'redux-saga/effects';
import HomeActions, { HomeTypes } from './actions';
//import { getStoriesApi } from '../../api/stories';
//import { getTypesApi } from '../../api/stories';
import { homeScreen } from '../../navigation/pushScreens';
import { photographerPopularApi, photographerRecommendationApi } from '../../api/photographer';

export function* getHomeSaga() {
  try {
    const response = yield call(photographerPopularApi);
    const newResponse = {
      data: response,
    };
    console.log('a: ', response);
    yield put(HomeActions.getPopularHomeFailure(newResponse));
    yield homeScreen();
  } catch (error) {
    console.log(error);
    yield put(HomeActions.getPopularHomeFailure(error));
  }
}

export function* getTypesSaga() {
  try {
    const response = yield call(photographerRecommendationApi);
    const newResponse = {
      data: response.data,
    };
    console.log(response.data);
    yield put(HomeActions.getRecommendationHomeSuccess(newResponse));
  } catch (error) {
    console.log(error);
    yield put(HomeActions.getRecommendationHomeFailure(error));
  }
}

const homeSagas = () => [
  takeLatest(HomeTypes.GET_POPULAR_HOME, getHomeSaga),
  takeLatest(HomeTypes.GET_RECOMMENDATION_HOME, getTypesSaga),
];

export default homeSagas();
