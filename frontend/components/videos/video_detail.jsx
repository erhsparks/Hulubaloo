import React from 'react';
import RoadblockButtonsContainer from './roadblock_buttons_container';

const VideoDetail = ({ video, currentUser }) => {
  let Video;

  if (currentUser) {
    Video = <iframe className='video-in-mast'
      src={`//player.vimeo.com/video/190629446?autoplay=1&badge=0&byline=0&color=66AA33&portrait=0&title=0`} />;
  } else {
    Video = <section className='video-in-mast'>
      <section className='logged-out-roadblock'>
        <h1>
          Hi there! Start watching {video.title} with a free Hulubaloo account.
        </h1>

        <p>
          Get unlimited access to our entire collection of hit TV shows and movies with a Hulubaloo account.
        </p>

        <RoadblockButtonsContainer />
      </section>
    </section>;
  }

  return (
    <content className='video-detail'
         style={{minHeight: `${$(window).height() - 50}px`}}>
      <section className='masthead'>
        {Video}
      </section>

      <section className='video-info'>
        <img className='featured-video'
          src={video.preview_image_url}
          alt={`Poster for ${video.title}`} />

        <section className='video-info-text'>
          <h1>{video.title}</h1>
          <div className='separator' />
          <p>
            {video.description}
            <br />
            <br />
            {`For copyright reasons, this is not actually ${video.title}.`}
          </p>
        </section>
      </section>
    </content>
  );
};

export default VideoDetail;
