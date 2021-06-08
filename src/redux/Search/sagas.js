import { put, call, takeLatest } from 'redux-saga/effects';
import SearchActions, { SearchTypes } from './actions';
import { startup } from '../AppRedux/actions';
import { searchApi } from '../../api/photographer';

export function* searchSaga({ data }) {
  try {
    const response = yield call(searchApi, data);
    yield put(SearchActions.searchSuccess(response));
    yield put(startup());
  } catch (error) {
    yield put(SearchActions.searchFailure(error));
  }
}

const searchSagas = () => [takeLatest(SearchTypes.SEARCH, searchSaga)];

export default searchSagas();
