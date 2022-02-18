import { call, put, takeLatest, select } from 'redux-saga/effects';

import { editUser } from '../services/axios/index';

import {
  requestUpdateUser,
  successUpdateUser,
  errorUpdateUser,
} from '../actions/index';

const getToken = (state) => state.login.token;

function* settingWorker(action) {
  try {
    const token = yield select(getToken);

    const response = yield call(editUser, action.payload, token);
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
