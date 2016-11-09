import React from 'react';
import { Link } from 'react-router';
import SessionModalContainer from '../session/session_modal_container';

const RoadblockButtons = ({ currentUser }) => {
  if (!currentUser) {
    return (
      <div className='video-player-buttons'>
        <SessionModalContainer displayText={'Join Hulubaloo'}
          formType={'Sign Up'}
          displayType={'button'} />

        <SessionModalContainer displayText={'Guest Demo'}
          formType={'Guest Log In'}
          displayType={'button'} />

        <p className='or-login-blurb'>
          Already have an account?

          <SessionModalContainer displayText={'Log In'}
            formType={'Log In'}
            displayType={'link'} />
        </p>
      </div>
    );
  } else return (<div></div>);
};

export default RoadblockButtons;
