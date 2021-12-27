import { handleActions } from 'redux-actions';
import * as actions from '../actions/index.js';

const initialState = {
  token: null,
  isAuthenticated: false,
  username: null,
};

const LoginReducer = handleActions(
  {
    [actions.requestLogin]: (state, action) => action.payload.data,
    [actions.successLogin]: (state, action) => action.payload,
    [actions.failLogin]: (state, action) => action.payload,
  },
  initialState
);

export default LoginReducer;
