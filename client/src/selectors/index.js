import { createSelector } from 'reselect';

const currentBookSelector = (state) => state.books.book;
const booksSelector = (state) => ({ ...state.books });

export const BookAllSelector = createSelector(booksSelector, (item) => item);
export const BookSelector = createSelector(currentBookSelector, (item) => item);
