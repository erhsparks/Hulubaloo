import { merge } from 'lodash';
import {
  RECEIVE_CURRENT_USER,
  RECEIVE_ERRORS,
  LOGOUT
} from '../actions/session_actions';

const _defaultSession = {
  currentUser: null,
  errors: []
};

const SessionReducer = (state = _defaultSession, action) => {
  Object.freeze(state);
  Object.freeze(_defaultSession);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return {
        currentUser: {
          id: action.user.id,
          username: action.user.username
        },
        errors: []
      };
    case RECEIVE_ERRORS:
      return {
        currentUser: null,
        errors: action.errors
      };
    case LOGOUT:
      return merge({}, _defaultSession);
    default:
      return merge({}, state);
  }
};

export default SessionReducer;
