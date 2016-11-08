import React from 'react';

const VideoDetail = ({ video }) => (
  <content className='video-detail'
       style={{minHeight: `${$(window).height() - 50}px`}}>
    <section className='masthead'>
      <iframe className='video-in-mast'
        src={`//player.vimeo.com/video/190629446?autoplay=1&badge=0&byline=0&color=66AA33&portrait=0&title=0`} />
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

export default VideoDetail;
