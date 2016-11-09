import { connect } from 'react-redux';
import Masthead from './masthead';

const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser
});

export default connect(
  mapStateToProps
)(Masthead);
