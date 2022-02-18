import { handleActions } from 'redux-actions';
import {
  requestGetBooks,
  successGetBooks,
  errorGetBooks,
  requestGetBook,
  successGetBook,
  errorGetBook,
} from '../actions/index';

const initialState = [];

const BooksReducer = handleActions(
  {
    [requestGetBooks]: (state = initialState, action) => {
      console.log(state, 'statereq-books');
      return state;
    },
    [successGetBooks]: (state = initialState, action) => {
      console.log(action.payload);
      console.log(state, 'success-state-books');

      return { ...state, books: action.payload };
    },
    [errorGetBooks]: (state, action) => action.payload,

    //currentBook

    // [requestGetBook]: (state = initialState, action) => {
    //   console.log(state, 'state');
    //   console.log(action.payload, 'fdfdf');

    //   return { ...state, ...action.payload };
    // },
    [successGetBook]: (state = initialState, action) => {
      console.log(action.payload, 'hi');

      return { ...state, ...action.payload };
    },

    [errorGetBook]: (state, action) => action.payload,
  },
  initialState
);

export default BooksReducer;
