import React from 'react';
import { Link } from 'react-router';
import { MailtoLink } from './mailto_link';

export const JobsLink = () => (
  <li><Link to={'/jobs'}>Jobs</Link></li>
);

export const Jobs = () => (
  <div className='plain-page'
       style={{minHeight: `${$(window).height() - 50}px`}}>
    <content className='footer-link-page'>
        <h1>Jobs</h1>

        <p>
          lol jk
        </p>
    </content>
  </div>
);
