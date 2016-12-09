import React from 'react';
import HeaderLoginLinksContainer from './header_login_links_container';

export default () => (
  <header className='global-header'>
    <nav className='header-nav page-width'>
      <ul className='user-menu'>
        <li><a href='/' className='hulubaloo-logo'></a></li>
        <li><a href='/#/categories'>Categories</a></li>
      </ul>
      <HeaderLoginLinksContainer />
    </nav>
  </header>
);
