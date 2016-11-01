import React from 'react';
import Header from './header/header';
import Footer from './footer';

const App = ({ children }) => {
  return (
  <div className='hulubaloo-main'>
    <Header />
    {children}
    <Footer />
  </div>
);};

export default App;
