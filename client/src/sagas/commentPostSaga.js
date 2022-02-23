import { call, put, select, takeLatest } from 'redux-saga/effects';

import {
  requestPostComment,
  successPostComment,
  errorPostComment,
} from '../actions/index';
import { createComment } from '../services/axios';

const getToken = (state) => state.user.token;

function* commentWorker(action) {
  try {
    const token = yield select(getToken);

    const response = yield call(createComment, action.payload, token);

    yield put(successPostComment(response.data));
  } catch (err) {
    yield put(errorPostComment(err.response.data));
  }
}

function* commentWatcher() {
  yield takeLatest(requestPostComment, commentWorker);
}

export default commentWatcher;
