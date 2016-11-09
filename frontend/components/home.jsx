import React from 'react';
import MastheadContainer from './masthead/masthead_container';
import { fetchCategories } from '../actions/categories_actions';
import FeaturedCategoriesContainer from './categories/featured_categories_container';

const Home = (store) => (
  <div className='hulubaloo-home-content'>
    <MastheadContainer />
    <FeaturedCategoriesContainer />
    <nav className='video-categories'></nav>
  </div>
);

export default Home;
