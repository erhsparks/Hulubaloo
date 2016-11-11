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
      let newState = merge({}, state);
      let comment = action.comment;

      if (comment.parent_id === 0) {
        newState[comment.id] = comment;
        return newState;
      } else {
        newState[comment.parent_id].children.push(comment);
        return newState;
      }
    default:
      return merge({}, state);
  }
};

export default CommentsReducer;
