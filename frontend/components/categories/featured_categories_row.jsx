import React from 'react';
import { Link } from 'react-router';
import CategoryVideo from './category_video';

const FeaturedCategoriesRow = ({ category }) => (
  <li className='featured-categories-row'>
    <h1>
      <Link to={`${category.name}`}>
        {category.name}
        <span className='carrot'>
          &nbsp;&nbsp;&gt;
        </span>
      </Link>
    </h1>

    <ul className='featured-categories-videos'>
      {category.videos.map(video => (
        <CategoryVideo key={video.id} video={video} />
      ))}
    </ul>
  </li>
);

export default FeaturedCategoriesRow;
