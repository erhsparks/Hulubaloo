import React from 'react';
import MastheadContainer from './masthead/masthead_container';
import FeaturedCategoriesContainer from './categories/index/featured_categories_container';

const Home = () => (
  <div className='hulubaloo-home-content'>
    <MastheadContainer />

    <FeaturedCategoriesContainer />
  </div>
);

export default Home;
