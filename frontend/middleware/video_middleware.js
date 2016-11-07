import {
  fetchVideo
} from '../util/video_api_util';

import {
  FETCH_VIDEO,
  receiveVideo,
} from '../actions/video_actions';

const VideoMiddleware = ({ dispatch }) => next => action => {
  const fetchError = err => console.log(err.responseJSON);

  switch(action.type) {
    case FETCH_VIDEO:
      const singleVideoSuccess = video => dispatch(receiveVideo(video));
      fetchVideo(action.id, singleVideoSuccess, fetchError);
      return next(action);
    default:
      return next(action);
  }
};

export default VideoMiddleware;
