import React from 'react';
import { Provider } from 'react-redux';
import {
  Router,
  Route,
  IndexRoute,
  hashHistory
} from 'react-router';

import {
  fetchCategories,
  fetchCategory
} from '../actions/category_actions';

import {
  fetchVideo
} from '../actions/video_actions';

import {
  fetchMovieNights,
  fetchMovieNight
} from '../actions/movie_night_actions';

import {
  fetchComments
} from '../actions/comment_actions';

import App from './app.jsx';
import Home from './home.jsx';
import AllCategories from './categories/index/all_categories';
import CategoryDetailContainer from './categories/detail/category_detail_container';
import VideoDetailContainer from './videos/video_detail_container';
import MovieNightIndexContainer from './movie_nights/index/movie_night_index_container';
import MovieNightContainer from './movie_nights/watch/movie_night_container';
import { About } from './footer/links/about';
import { Jobs } from './footer/links/jobs';
import { Disclaimer } from './footer/links/disclaimer';
import { Terms } from './footer/links/terms';
import { Privacy } from './footer/links/privacy';

const Root = ({ store }) => {
  const dispatch = store.dispatch;

  const loadVideo = nextState => {
    dispatch(fetchVideo(nextState.params.videoId));
  };

  const loadCategories = () => {
    dispatch(fetchCategories());
  };

  const loadCategory = nextState => {
    dispatch(fetchCategory(nextState.params.categoryName));
  };

  const loadMovieNights = () => {
    dispatch(fetchMovieNights());
  };

  const loadMovieNightAndComments = (nextState, replace) => {
    loggedOutRedirect(replace);
    dispatch(fetchMovieNight(nextState));
    dispatch(fetchComments(nextState));
  };

  const loggedOutRedirect = replace => {
    if (!store.getState().session.currentUser) replace('/');
  };

  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path='/' component={App}>
          <IndexRoute component={Home} onEnter={loadCategories} />

          <Route path='categories'
            component={AllCategories} onEnter={loadCategories} />

          <Route path='categories/:categoryName'
            component={CategoryDetailContainer} onEnter={loadCategory} />

          <Route path='watch/:videoId'
            component={VideoDetailContainer} onEnter={loadVideo} />

          <Route path='movie-nights'
            component={MovieNightIndexContainer} onEnter={loadMovieNights} />

          <Route path='movie-nights/:movieNightId'
            component={MovieNightContainer} onEnter={loadMovieNightAndComments} />

          <Route path='about' component={About} />
          <Route path='jobs' component={Jobs} />
          <Route path='disclaimer' component={Disclaimer} />
          <Route path='terms' component={Terms} />
          <Route path='privacy' component={Privacy} />
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
