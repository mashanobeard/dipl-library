import { call, put, takeLatest, select } from 'redux-saga/effects';
import { editUser } from '../services/api/index';
import {
  requestUpdateUser,
  successUpdateUser,
  errorUpdateUser,
} from '../actions/index';
import {getStorageData} from "../services/localStorage/localStorage";

function* settingWorker(action) {
  try {
    const { id } = getStorageData('token');
    const { username, email } = action.payload;

    const response = yield call(editUser, { id, username, email });
    yield put(
      successUpdateUser({
        username: response.data.username,
        email: response.data.email,
      })
    );
  } catch (err) {
    const errors = [];

    if (err.response.status === 409) {
      if (err.response.data.includes('username')) {
        errors.push('Username is taken');
      }
      if (err.response.data.includes('email')) {
        errors.push('Email address is already used for another account');
      }
    } else {
      for (let key in err.response.data) {
        errors.push(err.response.data[key]);
      }
    }

    yield put(errorUpdateUser(errors));
  }
}

function* settingWatcher() {
  yield takeLatest(requestUpdateUser, settingWorker);
}

export default settingWatcher;
