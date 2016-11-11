import { connect } from 'react-redux';
import { values } from 'lodash';
import {
  fetchComments,
  fetchComment,
  createComment
} from '../../../../actions/comment_actions';
import Comments from './comments';

const mapStateToProps = ({ session, comments }) => ({
  currentUsername: session.currentUser.username,
  comments: values(comments).reverse()
});

const mapDispatchToProps = dispatch => ({
  fetchComments: movieNightId => dispatch(fetchComments(movieNightId)),
  fetchComment: id => dispatch(fetchComment(id)),
  createComment: comment => dispatch(createComment(comment))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Comments);
