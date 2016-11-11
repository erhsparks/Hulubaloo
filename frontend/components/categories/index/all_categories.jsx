import React from 'react';
import FeaturedCategoriesContainer from './featured_categories_container';

const AllCategories = () => (
  <article className='all-categories'
       style={{minHeight: `${$(window).height() - 159}px`}}>
    <header className='category-header'>
      <h1 className='page-width'>
        Categories
      </h1>
    </header>

    <FeaturedCategoriesContainer />
  </article>
);

export default AllCategories;
