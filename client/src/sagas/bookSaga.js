import { Book } from '@material-ui/icons';
import { takeLatest, put, call, select } from 'redux-saga/effects';
import { requestGetBook, successGetBook, errorGetBook } from '../actions/index';
import { getBookId } from '../services/api/index';

// const getToken = (state) => state.user.token;

function* BookRequest(action) {
  try {
    // const token = yield select(getToken);

    const response = yield call(getBookId, action.payload);
    const { data } = response;
    console.log(data, 'book');
    yield put(successGetBook(data));
  } catch (error) {
    yield put(errorGetBook(error));
  }
}
function* sagaAuthWatcher() {
  yield takeLatest(requestGetBook, BookRequest);
}
export default sagaAuthWatcher;
