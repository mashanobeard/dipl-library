import { all } from 'redux-saga/effects';
import loginSaga from '../sagas/loginSaga';
import authSaga from '../sagas/authSaga';
import booksSaga from '../sagas/booksSaga';
import bookSaga from '../sagas/bookSaga';
import settingsSaga from '../sagas/settingsSaga';

function* rootSaga() {
  yield all([loginSaga(), authSaga(), booksSaga(), bookSaga(), settingsSaga()]);
}
export default rootSaga;
