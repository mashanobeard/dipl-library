import { handleActions } from 'redux-actions';
import { requestLogin, successLogin, errorLogin } from '../actions/index.js';

const initialState = [];

const LoginReducer = handleActions(
  {
    [requestLogin]: (state, action) => {
      console.log(...state, 'req');

      return action.payload;
    },

    [successLogin]: (state, action) => {
      console.log(action.payload, 'login');

      return { ...action.payload };
    },

    // [errorLogin]: (state, action) => state,
    // [logOutUser]: (state, action) => initialState,
  },
  initialState
);

export default LoginReducer;
