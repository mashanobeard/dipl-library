import { createAction } from 'redux-actions';

export const requestLogin = createAction('REQUEST_LOGIN');
export const successLogin = createAction('SUCCESS_LOGIN');
export const failLogin = createAction('FAIL_LOGIN');

export const requestAuth = createAction('REQUEST_LOGIN');
export const successAuth = createAction('SUCCESS_LOGIN');
export const failAuth = createAction('FAIL_LOGIN');
