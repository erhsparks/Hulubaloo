import React from 'react';
import Header from './header/header';
import Footer from './footer';

const App = ({ children }) => (
  <div className='hulubaloo-main'>
    <Header />

    {children}
    <div className='masthead'></div>
    <div className='featured-videos'></div>
    <nav className='video-categories'></nav>

    <Footer />
  </div>
);

export default App;
