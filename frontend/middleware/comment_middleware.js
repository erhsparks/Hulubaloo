import {
  fetchComments,
  fetchComment,
  createComment
} from '../util/comment_api_util';

import {
  FETCH_COMMENTS,
  FETCH_COMMENT,
  CREATE_COMMENT,
  receiveComments,
  receiveComment
} from '../actions/comment_actions';

const CommentMiddleware = ({ dispatch }) => next => action => {
  const commentsSuccess = comments => dispatch(receiveComments(comments));
  const commentSuccess = comment => dispatch(receiveComment(comment));

  switch(action.type) {
    case FETCH_COMMENTS:
      fetchComments(action.movieNightId, commentsSuccess);
      return next(action);
    case FETCH_COMMENT:
      fetchComment(action.id, commentSuccess);
      return next(action);
    case CREATE_COMMENT:
      createComment(action.comment, commentSuccess);
      return next(action);
    default:
      return next(action);
  }
};

export default CommentMiddleware;
