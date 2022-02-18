import { combineReducers } from 'redux';
import LoginReducer from './loginReducer.js';
import AuthReducer from './authReducer.js';
import BooksReducer from './booksReducer.js';
import UserReducer from './userReducer.js';
import SettingReducer from './settingsReducer.js';

export const rootReducer = combineReducers({
  login: LoginReducer,
  auth: AuthReducer,
  books: BooksReducer,
  user: UserReducer,
  settings: SettingReducer,
});
