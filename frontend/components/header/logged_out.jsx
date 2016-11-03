import React from 'react';
import SessionModal from '../session/session_modal';
import { Link } from 'react-router';

export default () => (
  <ul className='user-menu'>
    <li>
      <SessionModal displayText={'GUEST DEMO'} formType={'Guest Log In'} />
    </li>

    <li>
      <SessionModal displayText={'SIGN UP NOW'} formType={'Sign Up'} />
    </li>

    <li>
      <SessionModal displayText={'LOG IN'} formType={'Log In'} />
    </li>
  </ul>
);
