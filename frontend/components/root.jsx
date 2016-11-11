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

import App from './app.jsx';
import Home from './home.jsx';
import CategoryDetailContainer from './categories/detail/category_detail_container';
import AllCategories from './categories/index/all_categories';
import VideoDetailContainer from './videos/video_detail_container';
import { About } from './footer/links/about';
import { Jobs } from './footer/links/jobs';
import { Disclaimer } from './footer/links/disclaimer';
import { Terms } from './footer/links/terms';
import { Privacy } from './footer/links/privacy';

const Root = ({ store }) => {
  const loadCategories = () => {
    store.dispatch(fetchCategories());
  };

  const loadCategory = nextState => {
    store.dispatch(fetchCategory(nextState.params.categoryName));
  };

  const loadVideo = nextState => {
    store.dispatch(fetchVideo(nextState.params.videoId));
  };

  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path='/' component={App}>
          <IndexRoute component={Home} onEnter={loadCategories} />
          <Route path='watch/:videoId'
            component={VideoDetailContainer} onEnter={loadVideo} />
          <Route path='categories'
            component={AllCategories} onEnter={loadCategories} />
          <Route path='categories/:categoryName'
            component={CategoryDetailContainer} onEnter={loadCategory} />
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
