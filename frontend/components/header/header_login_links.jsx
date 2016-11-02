import React from 'react';
import LoggedIn from './logged_in';
import LoggedOut from './logged_out';

export default ({ currentUser, logout }) => (
  currentUser ? <LoggedIn currentUser={currentUser} logout={logout}/> : <LoggedOut />
);
