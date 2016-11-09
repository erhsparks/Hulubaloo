import React from 'react';
import { Link } from 'react-router';

const CategoryVideo = ({ video }) => {
  if (video.title === 'Placeholder') {
    return (
      <li className='featured-video no-show'>
        <img
          src='/assets/transparent_1px.gif'
          alt='' />
      </li>
    );
  } else {
    return (
      <Link to={`watch/${video.id}`}>
        <li className='featured-video'>
          <img
            src={video.preview_image_url}
            alt={`Poster link to ${video.title}`} />
          <div className='play-button' />
        </li>
      </Link>
    );
  }
};

export default CategoryVideo;
