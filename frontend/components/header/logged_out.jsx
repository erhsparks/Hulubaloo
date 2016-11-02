import React from 'react';

export default ({ currentUser, logout }) => {
  const handleLogout = e => logout();

  return (
    <ul className='user-menu logged-out'>
      <li><a>{currentUser.username.toUpperCase()}</a></li>

      <li><a onClick={handleLogout}>LOG OUT</a></li>
    </ul>
  );
};
