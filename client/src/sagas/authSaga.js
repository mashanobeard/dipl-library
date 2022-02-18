import { takeLatest, put, call } from 'redux-saga/effects';
import { requestAuth, successAuth, errorAuth } from '../actions/index.js';
import { Registration } from '../services/axios/index';
// import { register } from '../services/axios/index';

function* AuthRequest(action) {
  try {
    console.log(action.payload, 'act');
    const user = yield call(Registration, action.payload);
    const { data } = user;
    console.log(data, 'user');
    yield put(successAuth(data));
  } catch (error) {
    yield put(errorAuth(error));
  }
}
function* sagaAuthWatcher() {
  yield takeLatest(requestAuth, AuthRequest);
}
export default sagaAuthWatcher;

// function* sagaWorker(action) {
//   console.log(action, 'sagaA');
//   try {
//     const response = yield call('api/auth/registration', payload, 'post');
//     console.log(response.data, 'saga1A');
//     yield put(successAuth(response.data));
//   } catch (error) {
//     yield put(errorAuth(error));
//   }
// }

// function* sagaAuthWatcher() {
//   yield takeLatest(requestAuth, sagaWorker);
// }
// export default sagaAuthWatcher;
