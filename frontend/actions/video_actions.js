export const FETCH_ALL_VIDEOS = 'FETCH_ALL_VIDEOS';
export const FETCH_VIDEO = 'FETCH_VIDEO';
export const FETCH_ALL_CATEGORIES = 'FETCH_ALL_CATEGORIES';
export const FETCH_VIDEOS_IN_CATEGORY = 'FETCH_VIDEOS_IN_CATEGORY';

export const RECEIVE_ALL_VIDEOS = 'RECEIVE_ALL_VIDEOS';
export const RECEIVE_VIDEO = 'RECEIVE_VIDEO';
export const RECEIVE_ALL_CATEGORIES = 'RECEIVE_ALL_CATEGORIES';
export const RECEIVE_VIDEOS_IN_CATEGORY = 'RECEIVE_VIDEOS_IN_CATEGORY';

export const fetchAllVideos = () => ({
  type: FETCH_ALL_VIDEOS
});

export const fetchVideo = id => ({
  type: FETCH_VIDEO,
  id
});

export const fetchAllCategories = () => ({
  type: FETCH_ALL_CATEGORIES
});

export const fetchVideosInCategory = id => ({
  type: FETCH_VIDEOS_IN_CATEGORY,
  id
});

export const receiveAllVideos = videos => ({
  type: RECEIVE_ALL_VIDEOS,
  videos
});

export const receiveVideo = video => ({
  type: RECEIVE_VIDEO,
  video
});

export const receiveAllCategories = categories => ({
  type: RECEIVE_ALL_CATEGORIES,
  categories
});

export const receiveVideosInCategory = category => ({
  type: RECEIVE_VIDEOS_IN_CATEGORY,
  category
});
