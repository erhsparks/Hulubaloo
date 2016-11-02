import React from 'react';

export default ({ currentUser, logout }) => (
  <ul className='user-menu'>
    <li className='user-dropdown'>
      <a>{currentUser.username.toUpperCase()}</a>

      <ul className='user-dropdown-items'>
        <li><a onClick={() => logout()}>Log Out</a></li>
      </ul>
    </li>
  </ul>
);
