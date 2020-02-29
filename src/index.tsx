import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'scss/main.scss';
import App from 'App';
import { Router } from 'react-router-dom';
import { ToastContainer } from 'components';
import history from 'utils/history';
import * as serviceWorker from './serviceWorker';
import createStore from './store/createStore';

const store = createStore();

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
      <ToastContainer />
    </Router>
  </Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
