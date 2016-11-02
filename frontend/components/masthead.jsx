import React from 'react';
import { Link } from 'react-router';

const Masthead = () => (
  <div className='masthead'>
    <Link to='/signup' className='fake-button'>Guest Demo</Link>
    <Link to='/signup' className='fake-button'>Join Hulubaloo</Link>
  </div>
);

export default Masthead;
