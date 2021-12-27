import { takeEvery, put } from 'redux-saga/effects';
import { requestLogin, successLogin, failLogin } from '../actions/index.js';

export function* sagaWatcher() {
  try {
    yield takeEvery(requestLogin, sagaWorker);
  } catch (error) {
    yield put(failLogin, error);
  }
}

function* sagaWorker(action) {
  try {
    yield put(successLogin());
  } catch (error) {
    yield put(failLogin, error);
  }
}
