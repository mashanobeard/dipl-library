import { handleActions } from 'redux-actions';

import { successLogin, logOutUser } from '../actions';
// import {avatarUpdateSucceeded} from '../../Setting/action';

const initialState = {
  username: '',
  email: '',
  password: '',
  token: '',
  pic: '',
};

const UserReducer = handleActions(
  {
    [successLogin]: (state = initialState, action) => {
      console.log(state);
      return { ...state, ...action.payload };
    },

    [logOutUser]: (state, action) => initialState,
    // [avatarUpdateSucceeded]: (state, action) => {
    //   return {...state, processing: true, pic:action.payload.pic };
    // },
  },

  initialState
);

export default UserReducer;
