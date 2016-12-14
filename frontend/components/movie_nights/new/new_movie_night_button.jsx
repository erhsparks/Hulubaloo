import React from 'react';
import NewMovieNightModal from './new_movie_night_modal';

const NewMovieNightButton = ({ currentUser }) => {
  if (currentUser) {
    return (
      <aside className='create-movie-night'>
        <p>
          {`Want to watch this movie with friends?`}
        </p>

        <NewMovieNightModal />
      </aside>
    );
  } else return (<aside className='create-movie-night'></aside>);
};

export default NewMovieNightButton;
