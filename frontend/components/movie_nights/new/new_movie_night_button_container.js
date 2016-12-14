import { connect } from 'react-redux';
import NewMovieNightButton from './new_movie_night_button';

const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser
});

export default connect(
  mapStateToProps
)(NewMovieNightButton);
