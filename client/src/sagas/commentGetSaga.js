import { call, put, select, takeLatest } from 'redux-saga/effects';
import { getComments } from '../services/axios/index';
import {
  requestGetComment,
  successGetComment,
  errorGetComment,
} from '../actions/index';

const getToken = (state) => state.user.token;

function* commentGetWorker(action) {
  try {
    const token = yield select(getToken);

    const response = yield call(getComments, action.payload, token);
    const { data } = response;
    yield put(successGetComment(data));
  } catch (err) {
    yield put(errorGetComment(err));
  }
}

function* commentGetWatcher() {
  yield takeLatest(requestGetComment, commentGetWorker);
}

export default commentGetWatcher;
