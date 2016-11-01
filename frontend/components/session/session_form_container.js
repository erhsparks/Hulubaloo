import { connect } from 'react-redux';
import SessionForm from './session_form';
import { login, signup } from '../../actions/session_actions';

const mapStateToProps = state => ({
  loggedIn: state.session.currentUser ? true : false,
  errors: state.session.errors
});

const mapDispatchToProps = (dispatch, { location }) => {
  const formType = (location.pathname.includes('login')) ? 'Log In' : 'Sign Up';
  const processFormFcn = (formType === 'Log In') ? login : signup;

  return ({
    formType,
    processForm: user => dispatch(processFormFcn(user))
  });
 };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
