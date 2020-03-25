import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from "redux";
import logger from 'redux-logger';
import './index.css';
import App from './components/App';
import reducer from './reducers';
import Root from './Root';

export const store = createStore(
  reducer,
  applyMiddleware(logger)
);

ReactDOM.render(
  <Root>
    <App />
  </Root>,
  document.getElementById('root')
);