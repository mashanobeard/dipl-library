import { handleActions } from 'redux-actions';

import {
  requestUpdateUser,
  successUpdateUser,
  errorUpdateUser,
  //   errorUpdatePic,
} from '../actions/index';

const initialState = {
  username: '',
  email: '',
};

const settingReducer = handleActions(
  {
    [requestUpdateUser]: (state, action) => state,
    [successUpdateUser]: (state, action) => {
      const data = { ...action.payload };
      return data;
    },
    [errorUpdateUser]: (state, action) => action.payload,

    // [errorUpdatePic]: (state, action) => ({
    //   processing: false,
    //   errors: [...action.payload],
    // }),
  },
  initialState
);

export default settingReducer;
