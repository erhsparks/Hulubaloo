import { connect } from 'react-redux';
import { fetchVideo } from '../../../actions/video_actions';
import MovieNight from './movie_night';

const mapStateToProps = ({ movieNight }) => ({
  movieNight
});

const mapDispatchToProps = dispatch => ({
  fetchVideo: id => dispatch(fetchVideo(id))
});

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(MovieNight);
