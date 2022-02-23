import { takeLatest, put, call } from 'redux-saga/effects';
import { requestLogin, successLogin, errorLogin } from '../actions/index.js';
import { loginUser } from '../services/api/index';

function* LoginRequest(action) {
  try {
    const user = yield call(loginUser, action.payload);
    const { data } = user;

    localStorage.setItem('token', JSON.stringify(data));

    yield put(
      successLogin({
        token: data.token,
        username: data.username,
        email: data.email,
        // pic: data.pic,
      })
    );
  } catch (error) {
    console.log(error, 'err');
    // yield put(errorLogin(error));
  }
}
function* sagaLoginWatcher() {
  yield takeLatest(requestLogin, LoginRequest);
}

export default sagaLoginWatcher;
