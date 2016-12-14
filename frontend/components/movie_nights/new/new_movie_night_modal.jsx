import React from 'react';
import Modal from 'react-modal';
import MovieNightFormContainer from './movie_night_form_container';

class NewMovieNightModal extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      modalOpen: false
    };

    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
  }

  closeModal () {
    this.setState({ modalOpen: false });
    // this.props.clearErrors();
  }

  openModal () {
    this.setState({ modalOpen: true });
  }

  render () {
    return (
      <div>
        <a className='fake-button' onClick={this.openModal}>
          {'Host a movie night!'}
        </a>

        <Modal className='session-modal'
          isOpen={this.state.modalOpen}
          onRequestClose={this.closeModal}>

          <MovieNightFormContainer />
        </Modal>
      </div>
    );
  }
}

export default NewMovieNightModal;
