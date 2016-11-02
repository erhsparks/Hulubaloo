import React from 'react';
import LoggedIn from './logged_in';
import LoggedOut from './logged_out';

export default ({ currentUser, logout }) => (
  currentUser ? <LoggedOut currentUser={currentUser} logout={logout}/> : <LoggedIn />
);
