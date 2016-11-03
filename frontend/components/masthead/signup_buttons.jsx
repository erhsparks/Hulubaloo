import React from 'react';
import { Link } from 'react-router';
import SessionModalContainer from '../session/session_modal_container';

const SignupButtons = ({ currentUser }) => {
  if (!currentUser) {
    return (
      <div className='masthead-buttons'>
        <SessionModalContainer displayText={'Guest Demo'}
          formType={'Guest Log In'}
          displayType={'button'} />

        <SessionModalContainer displayText={'Join Hulubaloo'}
          formType={'Sign Up'}
          displayType={'button'} />
      </div>
    );
  } else return (<div></div>);
};

export default SignupButtons;
