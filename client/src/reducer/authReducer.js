import { handleActions } from 'redux-actions';
import { requestAuth, successAuth, errorAuth } from '../actions/index.js';

const initialState = {
  username: '',
  email: '',
  password: '',
  confirmPassword: '',
  token: '',
  isAuthenticated: null,
};

const AuthReducer = handleActions(
  {
    [requestAuth]: (state, action) => state,
    [successAuth]: (state, action) => ({
      isAuthenticated: true,
      ...action.payload,
    }),

    [errorAuth]: (state, action) => state,
  },
  initialState
);

export default AuthReducer;
