import { connect } from 'react-redux';
import SessionForm from './session_form';
import { login, signup } from '../../actions/session_actions';

const mapStateToProps = state => ({
  loggedIn: state.session.currentUser ? true : false,
  errors: state.session.errors
});

const mapDispatchToProps = (dispatch, { formType }) => {
  const processFormFcn = (formType === 'Sign Up') ? signup : login;

  return ({
    formType,
    processForm: user => dispatch(processFormFcn(user))
  });
 };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
