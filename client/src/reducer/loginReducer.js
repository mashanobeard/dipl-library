import { handleActions } from 'redux-actions';
import {
  requestLogin,
  successLogin,
  errorLogin,
  logOutUser,
} from '../actions/index.js';

const initialState = [];

const LoginReducer = handleActions(
  {
    [requestLogin]: (state, action) => {
        return { ...state, ...action.payload };
    },

    [successLogin]: (state, { payload }) => {
      return { ...state, ...payload };
    },

    // [errorLogin]: (state, action) => state,
    [logOutUser]: (state, action) => initialState,
  },
  initialState
);

export default LoginReducer;
