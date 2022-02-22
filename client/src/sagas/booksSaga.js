import { takeLatest, put, call, select } from 'redux-saga/effects';
import {
  requestGetBooks,
  successGetBooks,
  errorGetBooks,
} from '../actions/index';
import { getBookList } from '../services/api/index';

// const getToken = (state) => state.Login.token;
// console.log(getToken, 'getToken');

function* BooksRequest(action) {
  try {
    // const respons1 = yield select(getToken);
    // console.log(respons1, 'token-saga');

    // console.log(action.payload, 'act');
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
