import React from 'react';
import SignupButtonsContainer from './signup_buttons_container';

const Masthead = () => (
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

    <h1 className='masthead-text'>
      hulubaloo is hulu. plus.
    </h1>

    <SignupButtonsContainer />
  </section>
);

export default Masthead;
