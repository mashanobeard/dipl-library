import { combineReducers } from 'redux';
import LoginReducer from './loginReducer.js';

export const rootReducer = combineReducers({
  login: LoginReducer,
});
