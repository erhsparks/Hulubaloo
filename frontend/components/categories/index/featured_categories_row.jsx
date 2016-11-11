import React from 'react';
import { Link } from 'react-router';
import { rowsOfFour } from '../../../reducers/selectors_and_transformers';
import CategoryVideo from '../detail/category_video';

const FeaturedCategoriesRow = ({ category }) => {
  let videos = category.videos;
  let row = rowsOfFour(videos)[0];

  return (
    <li className='featured-categories-row'>
      <h1>
        <Link to={`categories/${category.name}`}>
          {category.name}
          <span className='carrot'>
            〉
          </span>
        </Link>
      </h1>

      <span className='featured-categories-videos-container'>
        <ul className='featured-categories-videos'>
          {row.map(video => (
            <CategoryVideo key={video.id} video={video} />
          ))}
        </ul>

        <h1>
          <Link to={`categories/${category.name}`}>
            <span className='carrot-large'>
              〉
            </span>
          </Link>
        </h1>
      </span>
    </li>
  );
};

export default FeaturedCategoriesRow;
