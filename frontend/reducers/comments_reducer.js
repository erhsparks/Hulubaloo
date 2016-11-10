import { merge } from 'lodash';
import {
  RECEIVE_COMMENTS,
  RECEIVE_COMMENT
} from '../actions/comment_actions';

const _defaultCommentsState = {};

const CommentsReducer = (state = _defaultCommentsState, action) => {
  Object.freeze(state);
  Object.freeze(_defaultCommentsState);

  switch (action.type) {
    case RECEIVE_COMMENTS:
      return merge({}, _defaultCommentsState, action.comments);
    case RECEIVE_COMMENT:
      return merge({}, state, action.comment);
    default:
      return merge({}, state);
  }
};

export default CommentsReducer;
