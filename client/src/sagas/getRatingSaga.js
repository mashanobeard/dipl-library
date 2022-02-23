import { call, put, select, takeLatest } from 'redux-saga/effects';

import { getRating } from '../services/axios/index';
import { requestGetRating, successGetRating, errorGetRating } from '../actions';

//const getToken = state => state.user.token;

function* ratingGetWorker(action) {
  try {
    // const token = yield select(getToken);

    const response = yield call(getRating, action.payload);
    const { data } = response;
    yield put(successGetRating(data));
  } catch (err) {
    yield put(errorGetRating(err));
  }
}

function* ratingGetWatcher() {
  yield takeLatest(requestGetRating, ratingGetWorker);
}

export default ratingGetWatcher;
