import React from 'react';
import { Link } from 'react-router';
import { AboutLink } from './links/about';
import { MyGithub, HulubalooGithub } from './links/github_links';
import { DisclaimerLink } from './links/disclaimer';
import { TermsLink } from './links/terms';
import { PrivacyLink } from './links/privacy';

export default () => (
  <footer>
    <nav className='footer-nav page-width'>
      <ul className='footer-ul'>
        <AboutLink />
        <MyGithub />
        <HulubalooGithub />
        <DisclaimerLink />
      </ul>

      <ul className='footer-ul'>
        <TermsLink />
        <PrivacyLink />
        <li>© 2016 Elizabeth Sparks</li>
      </ul>
    </nav>
  </footer>
);
