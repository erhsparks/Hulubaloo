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
  const apiCallError = err => console.log(err.responseJSON);
  const commentsSuccess = comments => dispatch(receiveComments(comments));
  const commentSuccess = comment => dispatch(receiveComment(comment));

  switch(action.type) {
    case FETCH_COMMENTS:
      fetchComments(action.movieNightId, commentsSuccess, apiCallError);
      return next(action);
    case FETCH_COMMENT:
      fetchComment(action.id, commentSuccess, apiCallError);
      return next(action);
    case CREATE_COMMENT:
      createComment(action.comment, commentSuccess, apiCallError);
      return next(action);
    default:
      return next(action);
  }
};

export default CommentMiddleware;
