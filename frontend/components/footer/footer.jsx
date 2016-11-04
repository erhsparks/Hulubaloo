import React from 'react';
import { Link } from 'react-router';
import { AboutLink } from './about';
import { MailtoLinkLi } from './mailto_link';
import { JobsLink } from './jobs';
import { MyGithub, HulubalooGithub } from './github_links';
import { DisclaimerLink } from './disclaimer';
import { TermsLink } from './terms';
import { PrivacyLink } from './privacy';

export default () => (
  <footer>
    <nav className='footer-nav page-width'>
      <ul className='footer-ul'>
        <AboutLink />
        <MailtoLinkLi />
        <JobsLink />
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
