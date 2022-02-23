import { createAction } from 'redux-actions';

//LOGIN
export const requestLogin = createAction('REQUEST_LOGIN');
export const successLogin = createAction('SUCCESS_LOGIN');
export const errorLogin = createAction('ERROR_LOGIN');

//REGISTRATION
export const requestAuth = createAction('REQUEST_AUTH');
export const successAuth = createAction('SUCCESS_AUTH');
export const errorAuth = createAction('ERROR_AUTH');

//GET ALL BOOKS
export const requestGetBooks = createAction('REQUEST_GET_BOOKS');
export const successGetBooks = createAction('SUCCESS_GET_BOOKS');
export const errorGetBooks = createAction('ERROR_GET_BOOKS');

//GET CURRENT BOOK
export const requestGetBook = createAction('REQUEST_GET_BOOK');
export const successGetBook = createAction('SUCCESS_GET_BOOK');
export const errorGetBook = createAction('ERROR_GET_BOOK');

//POST COMMENT
export const requestPostComment = createAction('REQUEST_POST_COMMENT');
export const successPostComment = createAction('SUCCESS_POST_COMMENT');
export const errorPostComment = createAction('ERROR_POST_COMMENT');

//GET COMMENTS
export const requestGetComment = createAction('REQUEST_GET_COMMENT');
export const successGetComment = createAction('SUCCESS_GET_COMMENT');
export const errorGetComment = createAction('ERROR_GET_COMMENT');

//POST RATING
export const requestPostRating = createAction('REQUEST_POST_RATING');
export const successPostRating = createAction('SUCCESS_POST_RATING');
export const errorPostRating = createAction('ERROR_POST_RATING');
//GET RATING
export const requestGetRating = createAction('REQUEST_GET_RATING');
export const successGetRating = createAction('SUCCESS_GET_RATING');
export const errorGetRating = createAction('ERROR_GET_RATING');

//LOG OUT
export const logOutUser = createAction('LOG_OUT_USER');

//EDIT USER'S CREDS
export const requestUpdateUser = createAction('REQUEST_UPDATE_USER');
export const successUpdateUser = createAction('SUCCESS_UPDATE_USER');
export const errorUpdateUser = createAction('ERROR_UPDATE_USER');

//EDIT USER'S AVATAR
export const requestUpdatePic = createAction('REQUEST_UPDATE_PIC');
export const successUpdatePic = createAction('SUCCESS_UPDATE_PIC');
export const errorUpdatePic = createAction('ERROR_UPDATE_PIC');
