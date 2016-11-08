import React from 'react';
import { Link } from 'react-router';
import { rowsOfFour } from '../../reducers/selectors_and_transformers';
import CategoryVideo from './category_video';

const FeaturedCategoriesRow = ({ category }) => {
  let videos = category.videos;
  let row = rowsOfFour(videos)[0];

  return (
    <li className='featured-categories-row'>
      <h1>
        <Link to={`${category.name}`}>
          {category.name}
          <span className='carrot'>
            &nbsp;&gt;
          </span>
        </Link>
      </h1>

      <ul className='featured-categories-videos'>
        {row.map(video => (
          <CategoryVideo key={video.id} video={video} />
        ))}
      </ul>
    </li>
  );
};

export default FeaturedCategoriesRow;
