import { takeLatest, put, call } from 'redux-saga/effects';
import HomeActions, { HomeTypes } from './actions';
import { photographerPopularApi, photographerRecommendationApi } from '../../api/photographer';

export function* getHomeSaga() {
  try {
    const response = yield call(photographerPopularApi);
    console.log('a: ', response);
    yield put(HomeActions.getPopularHomeSuccess(response.data));
  } catch (error) {
    console.log(error);
    yield put(HomeActions.getPopularHomeFailure(error));
  }
}

export function* getTypesSaga() {
  try {
    const response = yield call(photographerRecommendationApi);
    console.log('b: ', response);
    yield put(HomeActions.getRecommendationHomeSuccess(response.data));
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
