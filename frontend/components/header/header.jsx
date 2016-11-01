import React from 'react';
import HeaderLoginLinksContainer from './header_login_links_container';

export default () => (
  <header>
    <img src='/assets/logo.png'
      alt='hulubaloo logo'
      style={{width: 118, height: 18}} />
    <HeaderLoginLinksContainer />
  </header>
);
