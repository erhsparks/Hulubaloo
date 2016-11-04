import {
  fetchAllVideos,
  fetchVideo,
  fetchAllCategories,
  fetchVideosInCategory
} from '../util/video_api_util';

import {
  FETCH_ALL_VIDEOS,
  FETCH_VIDEO,
  FETCH_ALL_CATEGORIES,
  FETCH_VIDEOS_IN_CATEGORY,
  receiveAllVideos,
  receiveVideo,
  receiveAllCategories,
  receiveVideosInCategory
} from '../actions/video_actions';

const VideoMiddleware = ({ dispatch }) => next => action => {
  const fetchError = err => console.log(err.responseJSON);

  switch(action.type) {
    case FETCH_ALL_VIDEOS:
      const allVideosSuccess = videos => dispatch(receiveAllVideos(videos));
      fetchAllVideos(allVideosSuccess, fetchError);
      return next(action);
    case FETCH_VIDEO:
      const singleVideoSuccess = video => dispatch(receiveVideo(video));
      fetchVideo(action.id, singleVideoSuccess, fetchError);
      return next(action);
    case FETCH_ALL_CATEGORIES:
      const allCategoriesSuccess = categories => dispatch(receiveAllCategories(categories));
      fetchAllCategories(allCategoriesSuccess, fetchError);
      return next(action);
    case FETCH_VIDEOS_IN_CATEGORY:
      const videosInCategorySuccess = category => dispatch(receiveVideosInCategory(category));
      fetchVideosInCategory(action.id, videosInCategorySuccess, fetchError);
      return next(action);
    default:
      return next(action);
  }
};

export default VideoMiddleware;
