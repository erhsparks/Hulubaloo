import React from 'react';
import { Link } from 'react-router';

const SignupButtons = ({ currentUser }) => {
  if (!currentUser) {
    return (
      <div className='masthead-buttons'>
        <Link className='fake-button' to='/signup'>Guest Demo</Link>
        <Link className='fake-button' to='/signup'>Join Hulubaloo</Link>
      </div>
    );
  } else return (<div></div>);
};

export default SignupButtons;
