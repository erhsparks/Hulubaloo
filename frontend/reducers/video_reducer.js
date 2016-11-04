import { merge } from 'lodash';
import {
  RECEIVE_ALL_VIDEOS,
  RECEIVE_VIDEO,
  RECEIVE_ALL_CATEGORIES,
  RECEIVE_VIDEOS_IN_CATEGORY
} from '../actions/video_actions';

const _defaultState = {
  videos: {},
  categories: {},
  errors: []
};

const VideoReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  Object.freeze(_defaultState);

  switch (action.type) {
    case RECEIVE_ALL_VIDEOS:
      return merge({}, _defaultState, { videos: action.videos });
    case RECEIVE_VIDEO:
      return merge({}, _defaultState, { videos: action.video });
    case RECEIVE_ALL_CATEGORIES:
      return merge({}, _defaultState, { categories: action.categories });
    case RECEIVE_VIDEOS_IN_CATEGORY:
      return merge({}, state, { categories: action.category });
    default:
      return merge({}, state);
  }
};

export default VideoReducer;
