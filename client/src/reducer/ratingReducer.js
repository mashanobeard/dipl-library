import { handleActions } from 'redux-actions';
import {
  successGetRating,
  errorGetRating,
  successPostRating,
  errorPostRating,
} from '../actions/index';

const ratingReducer = handleActions(
  {
    [successPostRating]: (state, action) => {
      const rating = action.payload.rating.rating;

      return { ...state, rating: rating, message: action.payload.message };
    },
    [errorPostRating]: (state, action) => {
      return [];
    },

    [successGetRating]: (state, action) => {
      const ratings = action.payload.rating;

      let ratingSum = 0;
      let itemsFound = 0;
      const length = ratings.length;
      let ratingItem = null;
      for (let i = 0; i < length; i++) {
        ratingItem = ratings[i];
        ratingSum = ratingItem.rating + ratingSum;
        itemsFound = itemsFound + 1;
      }
      const averageRating = ratingSum / itemsFound;
      return { ...state, rating: averageRating, length: length };
    },
    [errorGetRating]: (state, action) => state,
  },
  []
);

export default ratingReducer;
