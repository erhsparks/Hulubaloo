import { merge } from 'lodash';
import { RECEIVE_VIDEO } from '../actions/video_actions';

const _defaultState = {
  id: null,
  title: '',
  description: '',
  preview_image_url: '',
  video_url: ''
};

const VideoReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  Object.freeze(_defaultState);

  switch (action.type) {
    case RECEIVE_VIDEO:
      return merge({}, _defaultState, action.video);
    default:
      return merge({}, state);
  }
};

export default VideoReducer;
