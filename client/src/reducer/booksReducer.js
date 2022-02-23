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

      return { ...state, books: action.payload };
    },
    [errorGetBooks]: (state, action) => action.payload,

    //currentBook

    // [requestGetBook]: (state = initialState, action) => {
    //   console.log(state, 'state');
    //   console.log(action.payload, 'id');

    //   return { ...state, ...action.payload };
    // },
    [successGetBook]: (state = initialState, action) => {
      console.log(state, 'state');
      console.log(action.payload);

      return { ...state, book: action.payload };
    },

    [errorGetBook]: (state, action) => [],
  },
  initialState
);

export default BooksReducer;
