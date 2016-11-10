import React from 'react';
import ReactDOM from 'react-dom';
import checkForLogin from './bootstrap_user';
import configureStore from './store/store';
import Modal from 'react-modal';
import Root from './components/root';
import toggleHeaderBkg from './header_scroll_handler';

// this commit only; for testing
import {
  fetchMovieNights,
  fetchMovieNight,
  createMovieNight
} from './actions/movie_night_actions';

import {
  fetchComments,
  fetchComment,
  createComment
} from './actions/comment_actions';
// end testing

document.addEventListener('DOMContentLoaded', () => {
  const preloadedState = checkForLogin();
  const store = configureStore(preloadedState);

  Modal.setAppElement(document.body);

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);

  toggleHeaderBkg();
  window.onscroll = () => toggleHeaderBkg();

  // this commit only; for testing
  window.fetchMovieNights = () => store.dispatch(fetchMovieNights());
  window.fetchMovieNight = id => store.dispatch(fetchMovieNight(id));
  window.createMovieNight = newMN => store.dispatch(createMovieNight(newMN));
  window.fetchComments = mNId => store.dispatch(fetchComments(mNId));
  window.fetchComment = id => store.dispatch(fetchComment(id));
  window.createComment = newComment => store.dispatch(createComment(newComment));

  window.topLevelComment = {
    comment: {
      body: 'wow!',
      movie_night_id: 1
    }
  };

  window.nestedComment = {
    comment: {
      body: 'wow!',
      movie_night_id: 1,
      parent_id: 1
    }
  };

  window.movieNight = {
    movie_night: {
      video_id: 3,
      date: [2016, 11, 10],
      time: [22, 45] // time here is in UST, form will have a timezone dropdown
    }
  };

  window.store = store;
  window.getState = store.getState;
  // end testing
});
