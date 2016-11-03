import React from 'react';
import SessionModalContainer from '../session/session_modal_container';
import { Link } from 'react-router';

export default () => (
  <ul className='user-menu'>
    <li>
      <SessionModalContainer displayText={'GUEST DEMO'} formType={'Guest Log In'} />
    </li>

    <li>
      <SessionModalContainer displayText={'SIGN UP NOW'} formType={'Sign Up'} />
    </li>

    <li>
      <SessionModalContainer displayText={'LOG IN'} formType={'Log In'} />
    </li>
  </ul>
);
