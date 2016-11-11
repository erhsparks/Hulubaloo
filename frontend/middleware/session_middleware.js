import {
  login,
  logout,
  signup
} from '../util/session_api_util';

import {
  LOGIN,
  LOGOUT,
  SIGNUP,
  receiveCurrentUser,
  receiveErrors
} from '../actions/session_actions';

import { hashHistory } from 'react-router';

const SessionMiddleware = ({ dispatch }) => next => action => {
  const sessionSuccess = user => dispatch(receiveCurrentUser(user));
  const sessionErrors = e => dispatch(receiveErrors(e.responseJSON));
  const logoutActions = () => {
    hashHistory.push('/');
    next(action);
  };

  switch (action.type) {
    case LOGIN:
      login(action.user, sessionSuccess, sessionErrors);
      return next(action);
    case LOGOUT:
      logout(logoutActions, sessionErrors);
      break;
    case SIGNUP:
      signup(action.user, sessionSuccess, sessionErrors);
      return next(action);
    default:
      return next(action);
  }
};

export default SessionMiddleware;
