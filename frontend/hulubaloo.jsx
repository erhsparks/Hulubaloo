import React from 'react';
import ReactDOM from 'react-dom';
import checkForLogin from './util/bootstrap_user';
import configureStore from './store/store';
import Modal from 'react-modal';
import Root from './components/root';
import headerHandler from './util/header_scroll_handler';

document.addEventListener('DOMContentLoaded', () => {
  const preloadedState = checkForLogin();
  const store = configureStore(preloadedState);

  Modal.setAppElement(document.body);

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);

  headerHandler();
});
