import { connect } from 'react-redux';
import VideoDetail from './video_detail';

const mapStateToProps = ({ video }) => ({
  video
});

export default connect (
  mapStateToProps
)(VideoDetail);
