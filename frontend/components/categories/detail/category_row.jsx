import React from 'react';
import { Link } from 'react-router';
import CategoryVideo from './category_video';

const CategoryRow = ({ row }) => (
  <li className='featured-categories-row'>
    <ul className='featured-categories-videos'>
      {row.map(video => (
        <CategoryVideo key={video.id} video={video} />
      ))}
    </ul>
  </li>
);

export default CategoryRow;
