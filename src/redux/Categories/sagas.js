import { takeLatest, put, call } from 'redux-saga/effects';
import CategoryActions, { CategoryTypes } from './actions';
import { CategoryApi } from '../../api/photographer';

export function* getCategorySaga({ id }) {
  try {
    const response = yield call(CategoryApi, id);
    yield put(CategoryActions.getCategorySuccess(response.data));
  } catch (error) {
    yield put(CategoryActions.getCategoryFailure(error));
  }
}

const categorySagas = () => [takeLatest(CategoryTypes.GET_CATEGORY, getCategorySaga)];

export default categorySagas();
