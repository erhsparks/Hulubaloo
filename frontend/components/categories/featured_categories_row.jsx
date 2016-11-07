import React from 'react';
import { Link } from 'react-router';
import FeaturedCategoriesVideo from './featured_categories_video';

const FeaturedCategoriesRow = ({ category }) => (
  <li className='featured-categories-row'>
    <h1>
      <Link to={`categories/${category.id}`}>
        {category.name}
      </Link>
    </h1>

    <ul className='featured-categories-videos'>
      {category.videos.map(video => (
        <FeaturedCategoriesVideo key={video.id} video={video} />
      ))}
    </ul>
  </li>
);

export default FeaturedCategoriesRow;
