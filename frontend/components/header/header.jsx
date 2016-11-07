import React from 'react';
import Logo from './logo';
import HeaderLoginLinksContainer from './header_login_links_container';

export default () => (
  <header className='global-header'>
    <nav className='header-nav page-width'>
      <Logo />
      <HeaderLoginLinksContainer />
    </nav>
  </header>
);
