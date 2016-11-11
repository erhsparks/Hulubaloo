import React from 'react';
import { Link } from 'react-router';

export const TermsLink = () => (
  <li><Link to={'/terms'}>Terms of Use</Link></li>
);

export const Terms = () => (
  <div className='plain-page'
       style={{minHeight: `${$(window).height() - 50}px`}}>
    <content className='footer-link-page'>
      <h1>Terms of Use</h1>

      <p>...</p>
    </content>
  </div>
);
