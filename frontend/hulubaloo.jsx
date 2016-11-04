import React from 'react';
import ReactDOM from 'react-dom';
import checkForLogin from './bootstrap_user';
import configureStore from './store/store';
import Modal from 'react-modal';
import Root from './components/root';
import toggleHeaderBkg from './header_scroll_handler';

import {
  fetchAllVideos,
  fetchVideo,
  fetchAllCategories,
  fetchVideosInCategory
 } from './actions/video_actions';

document.addEventListener('DOMContentLoaded', () => {
  const preloadedState = checkForLogin();
  const store = configureStore(preloadedState);

  Modal.setAppElement(document.body);
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);

  toggleHeaderBkg();
  window.onscroll = () => toggleHeaderBkg();

// this commit only; for testing
  window.fetchAllVideos = fetchAllVideos;
  window.fetchVideo = fetchVideo;
  window.fetchAllCategories = fetchAllCategories;
  window.fetchVideosInCategory = fetchVideosInCategory;
  window.store = store;
});
