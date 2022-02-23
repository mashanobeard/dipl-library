import { takeLatest, put, call } from 'redux-saga/effects';
import {
  requestGetBooks,
  successGetBooks,
  errorGetBooks,
} from '../actions/index';
import { getBookList } from '../services/api/index';

function* BooksRequest(action) {
  try {
    const response = yield call(getBookList);
    const { data } = response;
    console.log(data, 'books');
    // localStorage.getItem('token');
    yield put(successGetBooks(data));
  } catch (error) {
    yield put(errorGetBooks(error));
  }
}
function* sagaAuthWatcher() {
  yield takeLatest(requestGetBooks, BooksRequest);
}
export default sagaAuthWatcher;
