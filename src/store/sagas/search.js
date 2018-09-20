import api from 'services/api';
import { call, put } from 'redux-saga/effects';
import { Creators as SearchActions } from 'store/ducks/search';


export function* search(action) {
  try {
    const response = yield call(api.get, `/songs?q=${action.payload.param}`);
    yield put(SearchActions.SearchSuccess(response.data));
  } catch (error) {
    yield put(SearchActions.SearchFailure('Erro ao pesquisar músicas na api'));
  }
}
