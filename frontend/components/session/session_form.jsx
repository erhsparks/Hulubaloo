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

  render () {
    return (
      <div className='session-form-container'>
        <h1>
          {this.props.formType}
        </h1>

        <form className='session-form'>
          <div className='user-inputs'>
            <label>Username
              <input
                type='text'
                value={this.state.username}
                onChange={this.updateParam('username')} />
            </label>

            <label>Password
              <input
                type='password'
                value={this.state.password}
                onChange={this.updateParam('password')} />
            </label>
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
