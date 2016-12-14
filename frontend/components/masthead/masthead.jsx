import React from 'react';
import MastheadFeatured from './masthead_background';
import SignupButtons from './signup_buttons';

const Masthead = ({ currentUser }) => {
  let getStarted;

  if (currentUser) {
    getStarted = 'Check out the Create Movie Night button on any video to get started.'
  } else {
    getStarted = 'Sign up now to create your free Hulubaloo account, or log in as Guest below.'
  }

  return (
    <section className='masthead'>
      <MastheadFeatured />

      <article className='masthead-text'>
        <h1>
          hulubaloo is hulu. plus.
        </h1>

        <h2>
          Host a Movie Night with your friends and comment together as you watch!
        </h2>

        <h3>
          {getStarted}
        </h3>

        <SignupButtons currentUser={currentUser} />
      </article>
    </section>
  );
};

export default Masthead;
