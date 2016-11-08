import { connect } from 'react-redux';
import VideoDetail from './video_detail';

const mapStateToProps = ({ video, session }) => ({
  video,
  currentUser: session.currentUser
});

export default connect (
  mapStateToProps
)(VideoDetail);
