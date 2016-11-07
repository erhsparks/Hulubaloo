export const FETCH_VIDEO = 'FETCH_VIDEO';
export const RECEIVE_VIDEO = 'RECEIVE_VIDEO';

export const fetchVideo = id => ({
  type: FETCH_VIDEO,
  id
});

export const receiveVideo = video => ({
  type: RECEIVE_VIDEO,
  video
});
