import { handleActions } from 'redux-actions';

import {
  requestUpdateUser,
  successUpdateUser,
  errorUpdateUser,
  errorUpdatePic,
  requestUpdatePic,
  successUpdatePic,
} from '../actions/index';

const initialState = {
  username: '',
  email: '',
  pic: '',
};

const settingReducer = handleActions(
  {
    [requestUpdateUser]: (state, action) => state,
    [successUpdateUser]: (state, action) => {
      const data = { ...action.payload };
      return data;
    },
    [errorUpdateUser]: (state, action) => action.payload,
    [requestUpdatePic]: (state, action) => state,
    [successUpdatePic]: (state, action) => {
      const picture = { ...action.payload };
      return picture;
    },
    [errorUpdatePic]: (state, action) => {
      const data = { ...action.payload };
      return data;
    },
  },
  initialState
);

export default settingReducer;
