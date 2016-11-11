import { connect } from 'react-redux';
import createComment from '../../../actions/comment_actions';
import CommentForm from './comment_form';

const mapStateToProps = ({ video }) => ({
  videoId: video.id
});

const mapDispatchToProps = dispatch => ({
  createComment: movieNight => dispatch(createComment(movieNight))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentForm);
