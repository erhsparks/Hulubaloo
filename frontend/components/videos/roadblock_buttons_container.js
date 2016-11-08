import { connect } from 'react-redux';
import RoadblockButtons from './roadblock_buttons';

const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser
});

export default connect(
  mapStateToProps
)(RoadblockButtons);
