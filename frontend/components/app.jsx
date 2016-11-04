import React from 'react';
import Header from './header/header';
import Footer from './footer';

const App = ({ children }) => (
  <div className='hulubaloo-home'>
    <Header />

    {children}

    <Footer />
  </div>
);

export default App;
