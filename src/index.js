import React from 'react';
import { Provider } from 'redux';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './redux/store';
import { makeServer } from './server';

if (process.env.NODE_ENV === 'development') {
  makeServer({ environment: 'development' });
};

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
