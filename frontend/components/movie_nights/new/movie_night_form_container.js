import { connect } from 'react-redux';
import createMovieNight from '../../../actions/movie_night_actions';
import MovieNightForm from './movie_night_form';

const mapStateToProps = ({ video }) => ({
  videoId: video.id
});

const mapDispatchToProps = dispatch => ({
  createMovieNight: movieNight => dispatch(createMovieNight(movieNight))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieNightForm);
