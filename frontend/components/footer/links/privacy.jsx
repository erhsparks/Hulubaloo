import React from 'react';
import { Link } from 'react-router';

export const PrivacyLink = () => (
  <li><Link to={'/privacy'}>Privacy Policy</Link></li>
);

export const Privacy = () => (
  <div className='plain-page'
       style={{minHeight: `${$(window).height() - 50}px`}}>
    <content className='footer-link-page'>
      <h1>Privacy Policy</h1>

      <p>I do not collect any personal information (note no email needs to be entered at signup) and user data is not used for any commercial or research purposes. Database is dropped and re-seeded each night (*tbd).</p>
    </content>
  </div>
);
