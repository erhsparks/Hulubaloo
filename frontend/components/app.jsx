import React from 'react';
import Header from './header/header';
import Masthead from './masthead';
import Footer from './footer';

const App = ({ children }) => (
  <div className='hulubaloo-main'>
    <Header />

    {children}
    <Masthead />
    <div className='featured-videos'></div>
    <nav className='video-categories'></nav>

    <Footer />
  </div>
);

export default App;
