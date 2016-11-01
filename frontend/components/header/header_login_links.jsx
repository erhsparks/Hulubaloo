import React from 'react';
import { Link } from 'react-router';

export default ({ currentUser, logout }) => {
  const handleLogout = e => logout();

  if (currentUser) {
    return (
      <div className='nav-bar-logged-out'>
        <h1>{currentUser.username.toUpperCase()}</h1>

        <button onClick={handleLogout}>Logout</button>
      </div>
    );
  } else {
    return (
      <div className='nav-bar-logged-in'>
        <p><Link to='/signup'>Sign Up</Link></p>
        <p><Link to='/login'>Log In</Link></p>
      </div>
    );
  }
};
