import React from 'react'
import ReactDOM from 'react-dom'
import polyfills from '../shared/utils/polyfills';

import { combineReducers } from 'redux-immutable';
import configureStore from './configuration/configureStore'

// Socket
import {makeSocketClient, socketStore, socketMiddleware} from './configuration/socket';

// History
import {createBrowserHistory} from 'history';

const history = createBrowserHistory();

import {setHistory} from '../shared/utils/history';

setHistory(history);

// Components
import * as reducers from './reducers'

// Styles
import './styles/reset.scss';
// import 'react-mdl/extra/material.min.css'
// import 'react-mdl/extra/css/material.teal-indigo.min.css'
// import 'react-mdl/extra/material.min.js'
import './styles/style.scss';
import 'rc-tooltip/assets/bootstrap_white.css'

// Services
import animations from './views/game/animations';
import animationMiddleware from './services/AnimationService/animationMiddleware';

const reducer = combineReducers({
  ...reducers
});

const APP_HOST = process.env.APP_HOST || window.location.host;
console.log(`Initializing new socket client (${APP_HOST})`);

const socketClient = makeSocketClient(APP_HOST, {forceNew: process.env.NODE_ENV === 'production'});

const store = configureStore(reducer, void 0, [
  animationMiddleware(animations)
  , socketMiddleware(socketClient)
]);

socketStore(socketClient, store);

import RootService from './services/RootService';

const render = () => {
  import('./app/Root').then(({default: Root}) => {
    // console.log(store.getState().toJS());
    ReactDOM.render(
      <Root store={store} history={history} ref={(root) => !!root && RootService.setRoot(root)}/>,
      document.getElementById('app')
    );
  })
};
if (module.hot) {
  module.hot.accept('./app/Root', render);
}
render();

import {appChangeLanguage} from './actions/app';

store.dispatch(appChangeLanguage(store.getState().getIn(['app', 'lang'])));




toggle.addEventListener('click', () => {
  const isDark = document.documentElement.classList.toggle('dark-mode');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
  toggle.innerHTML = `<span class="theme-icon">${isDark ? '☀️' : '🌙'}</span>`;
});






// === Theme Toggle with Icon and Fade ===
const toggle = document.createElement('div');
toggle.className = 'theme-toggle';
toggle.innerHTML = localStorage.getItem('theme') === 'dark' ? '☀️' : '🌙';
document.body.appendChild(toggle);

const setTheme = (isDark) => {
  document.documentElement.classList.toggle('dark-mode', isDark);
  document.body.classList.toggle('dark-mode', isDark);
  document.getElementById('app')?.classList.toggle('dark-mode', isDark);
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
  toggle.innerHTML = isDark ? '☀️' : '🌙';
};

if (localStorage.getItem('theme') === 'dark') {
  setTheme(true);
}

toggle.addEventListener('click', () => {
  document.body.classList.add('fade-transition');
  document.getElementById('app')?.classList.add('fade-transition');
  setTimeout(() => {
    const isDark = !document.documentElement.classList.contains('dark-mode');
    setTheme(isDark);
    setTimeout(() => {
      document.body.classList.remove('fade-transition');
      document.getElementById('app')?.classList.remove('fade-transition');
    }, 300);
  }, 50);
});
