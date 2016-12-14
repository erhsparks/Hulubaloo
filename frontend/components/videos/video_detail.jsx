import React from 'react';
import RoadblockButtonsContainer from './roadblock_buttons_container';
import NewMovieNightButtonContainer from '../movie_nights/new/new_movie_night_button_container';

const VideoDetail = ({ video, currentUser, movieNight }) => {
  let Video;

  let videoClass = 'video-in-mast';
  if (!movieNight) videoClass += ' min-width';

  if (currentUser) {
    Video = <iframe className={videoClass}
      src={video.video_url} />;
  } else {
    Video = <section className={videoClass}>
      <section className='logged-out-roadblock'>
        <h1>
          Hi there! Start watching {video.title} with a free Hulubaloo account.
        </h1>

        <p>
          Get unlimited access to our entire video collection when you sign up or log in as Guest.
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

        <section className='right-side-container'>
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

          <NewMovieNightButtonContainer movieNight={movieNight}/>
        </section>
      </section>
    </content>
  );
};

export default VideoDetail;
