import { takeLatest, put, call } from 'redux-saga/effects';
import { requestLogin, successLogin, errorLogin } from '../actions/index.js';
import { Login } from '../services/axios/index';

function* LoginRequest(action) {
  try {
    console.log(action.payload, 'act-log');
    const user = yield call(Login, action.payload);
    const { data } = user;
    console.log(data, 'user-data');
    localStorage.setItem('token', JSON.stringify(data));

    yield put(successLogin(data));
  } catch (error) {
    console.log(error, 'err');
    // yield put(errorLogin(error));
  }
}
function* sagaLoginWatcher() {
  yield takeLatest(requestLogin, LoginRequest);
}

export default sagaLoginWatcher;

// export function* sagaWatcher() {
//   try {
//     yield takeLatest(requestLogin, sagaWorker);
//   } catch (error) {
//     yield put(errorLogin, error);
//   }
// }

// function* sagaWorker(action) {
//   console.log(action, 'action');
//   try {
//     yield put(successLogin());
//     const payload = yield call(fetchUsers);
//     yield put({});
//   } catch (error) {
//     yield put(errorLogin, error);
//   }
// }

// async function fetchUsers() {
//   const response = await fetch('http://localhost:5000/api/auth/login');
//   return await response.json();
// }

// function* sagaWorker(action) {
//   console.log(action, 'saga');
//   try {
//     const response = yield call('api/auth/login', action.payload);
//     console.log(response.data, 'saga1');
//     yield put(successLogin(response.data));
//   } catch (error) {
//     yield put(errorLogin(error));
//   }
// }

// function* sagaWatcher() {
//   yield takeLatest(requestLogin, sagaWorker);
// }

// export default sagaWatcher;
