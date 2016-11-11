import React from 'react';
import { Link } from 'react-router';

export default ({ currentUser, logout }) => (
  <ul className='user-menu'>
    <li className='user-dropdown'>
      <a>{currentUser.username}</a>

      <div>
        <ul className='user-dropdown-items'>
          <li><Link to='movie-nights'>My Movie Nights</Link></li>
          <li><a onClick={() => logout()}>Log Out</a></li>
        </ul>
      </div>
    </li>
  </ul>
);
