import { call, put, takeLatest } from 'redux-saga/effects';

import { editPic } from '../services/api/index';
import { getStorageData } from '../services/localStorage/localStorage';
import { requestUpdatePic, successUpdatePic, errorUpdatePic } from '../action';

function* updatePicWorker(action) {
  try {
    const response = yield call(editPic, action.payload);
    yield put(successUpdatePic(response.data));
  } catch (err) {
    yield put(errorUpdatePic(err));
  }
}

function* updatePicWatcher() {
  yield takeLatest(requestUpdatePic, updatePicWorker);
}

export default updatePicWatcher;
