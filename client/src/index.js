import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { rootReducer } from './reducer/rootReducer';
import createSagaMiddleware from 'redux-saga';
import { sagaWatcher } from './sagas/index.js';

const saga = createSagaMiddleware();
const store = createStore(rootReducer);

saga.run(sagaWatcher);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
