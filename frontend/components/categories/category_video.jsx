import React from 'react';
import { Link } from 'react-router';

const CategoryVideo = ({ video }) => (
  <li>
    <Link to={`watch/${video.id}`}>
      <img className='featured-video'
        src={video.preview_image_url}
        alt={`Poster link to ${video.title}`} />
    </Link>
  </li>
);

export default CategoryVideo;
