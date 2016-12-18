import React from 'react';
import { Link } from 'react-router';

export const DisclaimerLink = () => (
  <li><Link to={'/disclaimer'}>Disclaimer</Link></li>
);

export const Disclaimer = () => (
  <div className='plain-page'
       style={{minHeight: `${$(window).height() - 50}px`}}>
    <content className='footer-link-page'>
      <h1>Disclaimer</h1>

      <p>{'This website is not intended for commercial use. No money is being made from any copyrighted content displayed on this page, and no copyright infringement is intended.'}</p>
    </content>
  </div>
);
