import React from 'react';
import { Link } from 'react-router';
import { MailtoLinkLi } from './mailto_link';
import { MyGithub, HulubalooGithub } from './github_links';

export const AboutLink = () => (
  <li><Link to={'/about'}>About</Link></li>
);

export const About = () => (
  <div className='plain-page'
       style={{minHeight: `${$(window).height() - 50}px`}}>
    <content className='footer-link-page'>
      <h1>About Hulubaloo</h1>

      <p>
        <Link to={'/'} className='no-margin'>Hulubaloo</Link> is a fullstack web app based on Hulu, developed by Elizabeth Sparks using Ruby on Rails and React/Redux. It is not intended for commercial use, simply as a demonstration of programming ability. Please enjoy exploring the site and feel free to contact me with any questions, concerns, bug reports, or recruitment offers. Thank you for visiting!

        <ul>
          <MailtoLinkLi />
          <MyGithub />
          <HulubalooGithub />
        </ul>
      </p>
    </content>
  </div>
);
