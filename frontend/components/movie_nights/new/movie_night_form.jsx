import React from 'react';
import { Link } from 'react-router';

class MovieNightForm extends React.Component {
  constructor (props) {
    super(props);
  }

  handleSubmit (e) {
    e.preventDefault();

    // ...
  }

  render () {
    // want date, time, timezone, participants
    // TODO: make a users index route

    return (
      <div className='placeholder-text'>
        <p>{'Coming soon! For now, check out the'}</p>
        <Link to='/movie-nights'>example movie nights</Link>
      </div>
    );
  }
}

export default MovieNightForm;
