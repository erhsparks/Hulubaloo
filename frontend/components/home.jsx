import React from 'react';
import MastheadContainer from './masthead/masthead_container';
import FeaturedCategoriesContainer from './categories/featured_categories_container';

const Home = () => (
  <div className='hulubaloo-home-content'>
    <MastheadContainer />

    <FeaturedCategoriesContainer />

    <nav className='video-categories'/>
  </div>
);

export default Home;
