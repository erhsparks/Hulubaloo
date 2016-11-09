import React from 'react';
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
      <div className='masthead-featured'>
        <img
          src='https://res.cloudinary.com/erhsparks/image/upload/v1478295419/max_cxnhhu.jpg'
          alt='Mad Max: Fury Road poster' />
        <img
          src='https://res.cloudinary.com/erhsparks/image/upload/v1478295419/thelma_louise_pubmpj.jpg'
          alt='Thelma and Louise poster' />
        <img
          src='https://res.cloudinary.com/erhsparks/image/upload/v1478295418/clueless_bfehko.jpg'
          alt='Clueless poster' />
        <img
          src='https://res.cloudinary.com/erhsparks/image/upload/v1478295418/iron_giant_nr8gqb.jpg'
          alt='The Iron Giant poster' />
      </div>

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
