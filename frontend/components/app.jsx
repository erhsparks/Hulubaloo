import React from 'react';
import Header from './header/header';
import Footer from './footer';

const App = ({ children }) => (
  <div className='hulubaloo-main'>
    <Header />

    {children}
    <div className='placeholder-masthead'></div>
    <div className='placeholder-body'></div>
    <nav className='placeholder-categories'></nav>

    <Footer />
  </div>
);

export default App;
