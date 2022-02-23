import { call, put, select, takeLatest } from 'redux-saga/effects';

import { postRating } from '../services/axios/index';
import {
  requestPostRating,
  successPostRating,
  errorPostRating,
} from '../actions';

//const getToken = state => state.user.token;

function* ratingWorker(action) {
  try {
    //const token = yield select(getToken);

    const response = yield call(postRating, action.payload);
    const { data } = response;
    yield put(successPostRating(data));
  } catch (err) {
    yield put(errorPostRating(err));
  }
}

function* ratingWatcher() {
  yield takeLatest(requestPostRating, ratingWorker);
}

export default ratingWatcher;
