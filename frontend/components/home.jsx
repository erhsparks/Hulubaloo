import React from 'react';
import Masthead from './masthead/masthead';
import { fetchCategories } from '../actions/categories_actions';
import FeaturedCategoriesContainer from './categories/featured_categories_container';

const Home = (store) => (
  <div className='hulubaloo-home-content'>
    <Masthead />
    <FeaturedCategoriesContainer />
    <nav className='video-categories'></nav>
  </div>
);

export default Home;
