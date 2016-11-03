import React from 'react';
import Modal from 'react-modal';
import SessionFormContainer from './session_form_container';

class SessionModal extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      modalOpen: false
    };

    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
    this.linkOrButton = this.linkOrButton.bind(this);
  }

  closeModal () {
    this.setState({ modalOpen: false });
  }

  openModal () {
    this.setState({ modalOpen: true });
  }

  linkOrButton () {
    return (this.props.displayType === 'button') ? 'fake-button' : '';
  }

  render () {
    return (
      <div>
        <a className={this.linkOrButton()}
          onClick={this.openModal}>{this.props.displayText}</a>

        <Modal className='session-modal'
          isOpen={this.state.modalOpen}
          onRequestClose={this.closeModal}>

          <SessionFormContainer formType={this.props.formType} />
        </Modal>
      </div>
    );
  }
}

export default SessionModal;
