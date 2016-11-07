import React from 'react';
import { withRouter } from 'react-router';

const FeaturedCategoriesVideo = ({ video, router }) => {
  const handleClick = url => e => router.push(url);

  return (
    <li onClick={handleClick(`watch/${video.id}`)}>
      <img className='featured-video'
        src={video.preview_image_url}
        alt={`Poster link to ${video.title}`} />
    </li>
  );
};

export default withRouter(FeaturedCategoriesVideo);
