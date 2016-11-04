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

const SessionMiddleware = ({ dispatch }) => next => action => {
  const sessionSuccess = user => dispatch(receiveCurrentUser(user));
  const sessionErrors = e => dispatch(receiveErrors(e.responseJSON));

  switch (action.type) {
    case LOGIN:
      login(action.user, sessionSuccess, sessionErrors);
      return next(action);
    case LOGOUT:
      logout(() => next(action), sessionErrors);
      break;
    case SIGNUP:
      signup(action.user, sessionSuccess, sessionErrors);
      return next(action);
    default:
      return next(action);
  }
};

export default SessionMiddleware;
