import { connect } from 'react-redux';
import { clearErrors } from '../../actions/session_actions';
import SessionModal from './session_modal';

const mapStateToProps = () => ({ });

const mapDispatchToProps = (dispatch) => ({
  clearErrors: () => dispatch(clearErrors())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionModal);
