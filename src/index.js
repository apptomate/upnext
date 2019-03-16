import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import WebFont from 'webfontloader';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
// import {loadLessons} from './actions/';
import { BrowserRouter, Link } from 'react-router-dom';
import App from './components/App';

import '../node_modules/react-s-alert/dist/s-alert-default.css';
import '../node_modules/react-s-alert/dist/s-alert-css-effects/jelly.css';
import '../node_modules/jquery/dist/jquery.min.js';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import '../node_modules/jquery-slimscroll/jquery.slimscroll.min.js';

const store = configureStore();

// Dispatch actions to load initial state.
// store.dispatch(loadLessons());


WebFont.load({
  google: {
    families: ['Montserrat:400,500,600,700','Noto+Sans:400,700']
  }
});

render((
  <Provider store={store}>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </Provider>
), document.getElementById('app'));

