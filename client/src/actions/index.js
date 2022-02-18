import { createAction } from 'redux-actions';

export const requestLogin = createAction('REQUEST_LOGIN');
export const successLogin = createAction('SUCCESS_LOGIN');
export const errorLogin = createAction('ERROR_LOGIN');

export const requestAuth = createAction('REQUEST_AUTH');
export const successAuth = createAction('SUCCESS_AUTH');
export const errorAuth = createAction('ERROR_AUTH');

export const requestGetBooks = createAction('REQUEST_GET_BOOKS');
export const successGetBooks = createAction('SUCCESS_GET_BOOKS');
export const errorGetBooks = createAction('ERROR_GET_BOOKS');

export const requestGetBook = createAction('REQUEST_GET_BOOK');
export const successGetBook = createAction('SUCCESS_GET_BOOK');
export const errorGetBook = createAction('ERROR_GET_BOOK');

export const logOutUser = createAction('LOG_OUT_USER');

export const requestUpdateUser = createAction('REQUEST_UPDATE_USER');
export const successUpdateUser = createAction('SUCCESS_UPDATE_USER');
export const errorUpdateUser = createAction('ERROR_UPDATE_USER');

export const requestUpdatePic = createAction('REQUEST_UPDATE_PIC');
export const successUpdatePic = createAction('SUCCESS_UPDATE_PIC');
export const errorUpdatePic = createAction('ERROR_UPDATE_PIC');
