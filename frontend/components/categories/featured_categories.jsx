import React from 'react';
import FeaturedCategoriesRow from './featured_categories_row';

const FeaturedCategories = ({ categories }) => (
  <section className='featured-categories'>
    <ul>
      {categories.map(category => (
        <FeaturedCategoriesRow key={category.id} category={category} />
      ))}
    </ul>
  </section>
);

export default FeaturedCategories;
