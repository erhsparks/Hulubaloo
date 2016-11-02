import { connect } from 'react-redux';
import SignupButtons from './signup_buttons';

const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser
});

export default connect(
  mapStateToProps
)(SignupButtons);
