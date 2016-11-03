import React from 'react';
import { Link } from 'react-router';
import SessionModal from '../session/session_modal';

const SignupButtons = ({ currentUser }) => {
  if (!currentUser) {
    return (
      <div className='masthead-buttons'>
        <SessionModal displayText={'Guest Demo'}
          formType={'Guest Log In'}
          displayType={'button'} />

        <SessionModal displayText={'Join Hulubaloo'}
          formType={'Sign Up'}
          displayType={'button'} />
      </div>
    );
  } else return (<div></div>);
};

export default SignupButtons;
