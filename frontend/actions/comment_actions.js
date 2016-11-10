export const FETCH_COMMENTS = 'FETCH_COMMENTS';
export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';
export const FETCH_COMMENT = 'FETCH_COMMENT';
export const CREATE_COMMENT = 'CREATE_COMMENT';
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';

export const fetchComments = movieNightId => ({
  type: FETCH_COMMENTS,
  movieNightId
});

export const receiveComments = comments => ({
  type: RECEIVE_COMMENTS,
  comments
});

export const fetchComment = id => ({
  type: FETCH_COMMENT,
  id
});

export const createComment = comment => ({
  type: CREATE_COMMENT,
  comment
});

export const receiveComment = comment => ({
  type: RECEIVE_COMMENT,
  comment
});
