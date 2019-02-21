import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import WebFont from 'webfontloader';
import configureStore from './store/configureStore';
import { loadMessages, loadNotifications, loadTasks, loadUserProfile } from './actions/Message-Notification-Tasks_Actions';

import { BrowserRouter, Link } from 'react-router-dom';
import App from './components/App';

import '../node_modules/react-s-alert/dist/s-alert-default.css';
import '../node_modules/react-s-alert/dist/s-alert-css-effects/jelly.css';
import '../node_modules/jquery/dist/jquery.min.js';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import '../node_modules/jquery-slimscroll/jquery.slimscroll.min.js';

const store = configureStore();

// Dispatch actions to load initial state.
store.dispatch(loadMessages());
store.dispatch(loadNotifications());
store.dispatch(loadTasks());
store.dispatch(loadUserProfile());

WebFont.load({
  google: {
    families: ['Montserrat:400,500,600,700','Noto+Sans:400,700']
  }
});

render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.getElementById('app'));

