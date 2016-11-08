import React from 'react';
import { Link } from 'react-router';

const CategoryVideo = ({ video }) => {
  if (video.title === 'Placeholder') {
    return (
      <li>
        <img className='featured-video no-show'
          src='/assets/transparent_1px.gif'
          alt='' />
      </li>
    );
  } else {
    return (
      <li>
        <Link to={`watch/${video.id}`}>
          <img className='featured-video'
            src={video.preview_image_url}
            alt={`Poster link to ${video.title}`} />
        </Link>
      </li>
    );
  }
};

export default CategoryVideo;
