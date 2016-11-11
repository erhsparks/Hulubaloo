import React from 'react';
import VideoDetailContainer from '../../videos/video_detail_container';

class MovieNight extends React.Component {
  constructor (props) {
    super(props);
  }

  componentWillUpdate (nextProps) {
    if (this.props.movieNight.video_id !== nextProps.movieNight.video_id) {
      const movieNight = nextProps.movieNight;
      this.props.fetchVideo(movieNight.video_id);
    }
  }

  render () {
    return (
      <div className='movie-night'>
        <VideoDetailContainer />
      </div>
    );
  }
}

export default MovieNight;
