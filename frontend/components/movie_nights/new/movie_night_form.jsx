import React from 'react';

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
      <div>Placeholder</div>
    );
  }
}

export default MovieNightForm;
