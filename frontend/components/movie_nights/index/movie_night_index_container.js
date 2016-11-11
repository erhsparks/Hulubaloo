import { connect } from 'react-redux';
import { sortByCurrency } from '../../../reducers/selectors_and_transformers';
import MovieNightIndex from './movie_night_index';

const mapStateToProps = ({ movieNights, session }) => ({
  movieNights: sortByCurrency(movieNights),
  currentUsername: session.currentUser.username
});

export default connect(
  mapStateToProps
)(MovieNightIndex);
