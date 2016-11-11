import React from 'react';
import Logo from './logo';
import { Link } from 'react-router';
import HeaderLoginLinksContainer from './header_login_links_container';

export default () => (
  <header className='global-header'>
    <nav className='header-nav page-width'>
      <ul className='user-menu'>
        <li><Logo /></li>
        <li><Link to='categories'>Categories</Link></li>
      </ul>
      <HeaderLoginLinksContainer />
    </nav>
  </header>
);
