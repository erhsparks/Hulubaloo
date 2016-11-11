import { merge } from 'lodash';
import {
  RECEIVE_MOVIE_NIGHTS,
  RECEIVE_MOVIE_NIGHT,
  ADD_MOVIE_NIGHT
} from '../actions/movie_night_actions';

const _defaultMovieNightsState = {};

const _defaultMovieNightState = {
  host: '',
  title: '',
  active: false,
  video_id: null,
  participants: []
};

export const MovieNightsReducer = (state = _defaultMovieNightsState, action) => {
  Object.freeze(state);
  Object.freeze(_defaultMovieNightsState);

  switch (action.type) {
    case RECEIVE_MOVIE_NIGHTS:
      return merge({}, _defaultMovieNightsState, action.movieNights);
    case ADD_MOVIE_NIGHT:
      return merge({}, state, action.movieNight);
    default:
      return merge({}, state);
  }
};

export const MovieNightReducer = (state = _defaultMovieNightState, action) => {
  Object.freeze(state);
  Object.freeze(_defaultMovieNightState);

  switch (action.type) {
    case RECEIVE_MOVIE_NIGHT:
      return merge({}, _defaultMovieNightState, action.movieNight);
    default:
      return merge({}, state);
  }
};
