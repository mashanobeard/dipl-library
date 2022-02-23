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
  isUpdated: '',
};

const settingReducer = handleActions(
  {
    // [requestUpdateUser]: (state, action) => state,
    [successUpdateUser]: (state, action) => {
      const data = { isUpdated: true, ...action.payload };
      console.log(data);
      return data;
    },
    [errorUpdateUser]: (state, action) => {
      const data = { isUpdated: false, ...action.payload };
      return data;
    },

    // [errorUpdatePic]: (state, action) => ({
    //   processing: false,
    //   errors: [...action.payload],
    // }),
  },
  initialState
);

export default settingReducer;
