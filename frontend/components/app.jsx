import React from 'react';
import Header from './header/header';
import Footer from './footer/footer';

const App = ({ children }) => (
  <div className='hulubaloo-home'
       style={{minHeight: `${$(window).height() - 50}px`}}>
    <Header />

    {children}

    <Footer />
  </div>
);

export default App;
