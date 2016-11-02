import React from 'react';
import Header from './header/header';
import Masthead from './masthead/masthead';
import Footer from './footer';

const App = ({ children }) => (
  <div className='hulubaloo-home'>
    <Header />

    {children}
    <div className='hulubaloo-home-content'>
      <Masthead />
      <div className='featured-videos'></div>
      <nav className='video-categories'></nav>
    </div>
    
    <Footer />
  </div>
);

export default App;
