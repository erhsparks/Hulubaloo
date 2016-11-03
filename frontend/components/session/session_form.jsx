import React from 'react';
import { Link, withRouter } from 'react-router';

class SessionForm extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      username: "",
      password: ""
    };

    this.formType = this.props.formType;

    this.handleSubmit = this.handleSubmit.bind(this);
    this.isGuest = this.isGuest.bind(this);
  }

  componentDidUpdate() {
    this.loggedInRedirect();
  }

  loggedInRedirect() {
    if (this.props.loggedIn) {
      this.props.router.push('/');
    }
  }

  componentDidMount () {
    this.checkForGuest();
  }

  checkForGuest () {
    if (this.props.formType === 'Guest Log In') {
      this.setState({
        username: 'Guest',
        password: 'password'
      });

      this.formType = 'Log In';
    }
  }

  handleSubmit (e) {
    e.preventDefault();

    const user = this.state;
    this.props.processForm({user});
  }

  updateParam (paramName) {
    return e => this.setState({
      [paramName]: e.currentTarget.value
    });
  }

  errors () {
    return (
      this.props.errors.map((error, i) => (
        <li key={i}>{error}</li>
      ))
    );
  }

  isGuest () {
    return this.props.formType.includes('Guest');
  }

  render () {
    return (
      <div className='session-form-container'>
        <h1>{this.props.formType}</h1>

        <form className='session-form'>
          <div className='user-input-fields'>
            <div className='user-input-labels'>
              <label htmlFor='username'>Username</label>
              <label htmlFor='password'>Password</label>
            </div>

            <div className='user-inputs'>
              <input id='username'
                type='text'
                value={this.state.username}
                className={`${this.isGuest() ? 'guest-form' : ''}`}
                disabled={this.isGuest() ? true : false}
                onChange={this.updateParam('username')} />

              <input id='password'
                type='password'
                value={this.state.password}
                className={`${this.isGuest() ? 'guest-form' : ''}`}
                disabled={this.isGuest() ? true : false}
                onChange={this.updateParam('password')} />
            </div>
          </div>

          <a type='submit'
            className='fake-button'
            onClick={this.handleSubmit}>
              {`${this.formType}`}
          </a>
        </form>

        <ul className='session-form-errors'>
          {this.errors()}
        </ul>
      </div>
    );
  }
}

export default withRouter(SessionForm);
