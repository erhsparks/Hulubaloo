import React from 'react';
import { withRouter } from 'react-router';
import FeaturedCategoriesVideo from './featured_categories_video';

const FeaturedCategoriesRow = ({ category, router }) => {
  const handleClick = url => e => router.push(url);

  return (
    <li className='featured-categories-row'>
      <h1
        onClick={handleClick(`categories/${category.id}`)}>
        {category.name}
      </h1>

      <ul className='featured-categories-videos'>
        {category.videos.map(video => (
          <FeaturedCategoriesVideo key={video.id} video={video} />
        ))}
      </ul>
    </li>
  );
};

export default withRouter(FeaturedCategoriesRow);
