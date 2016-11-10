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
} from './util/movie_night_api_util';

import {
  fetchComments,
  fetchComment,
  postComment
} from './util/comment_api_util';
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
  window.fetchMovieNights = fetchMovieNights;
  window.fetchMovieNight = fetchMovieNight;
  window.createMovieNight = createMovieNight;
  window.fetchComments = fetchComments;
  window.fetchComment = fetchComment;
  window.postComment = postComment;
  window.success = data => console.log(data);
  window.error = data => console.log(data);
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
      video_id: 2,
      date: [2016, 11, 10],
      time: [18, 50] // time here is in UST, form will have a timezone dropdown
    }
  };
  // end testing
});
