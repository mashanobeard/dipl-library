import { handleActions } from 'redux-actions';
import {
  successPostComment,
  errorPostComment,
  requestGetComment,
  successGetComment,
  errorGetComment,
} from '../actions/index';

const initialState = [];

const commentPost = handleActions(
  {
    [successPostComment]: (state, action) => {
      return [...state, action.payload.comment];
    },
    [errorPostComment]: (state, action) => initialState,
    [requestGetComment]: (state, action) => state,
    [successGetComment]: (state, action) => {
      const comments = action.payload.comments;
      const picture = action.payload.picture;
      const arr = picture.map(function (element) {
        return {
          id: element._id,
          pic: element.pic,
          postedBy: element.username,
        };
      });

      let comment = comments.map((item, i) => {
        const postedBy = arr.filter((el) => el.postedBy === item.postedBy)[0];
        return { ...item, pic: postedBy.pic };
      });

      return comment;
    },
    [errorGetComment]: (state, action) => state,
  },
  initialState
);

export default commentPost;
