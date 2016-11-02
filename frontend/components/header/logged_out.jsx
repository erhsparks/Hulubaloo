import React from 'react';
import { Link } from 'react-router';

export default () => (
  <ul className='user-menu'>
    <li><Link to='/signup'>SIGN UP NOW</Link></li>
    <li><Link to='/login'>LOG IN</Link></li>
  </ul>
);
