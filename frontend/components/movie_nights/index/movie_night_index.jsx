import React from 'react';
import RoadblockButtonsContainer from '../../videos/roadblock_buttons_container';
import MovieNightIndexItem from './movie_night_index_item';

const MovieNightIndex = ({ movieNights, currentUser }) => {
  // need to make this a class extending React.Component and call the below on componentDidUpdate:
  // const checkForUserChange = (prevState, nextState) => {
  //   if (prevState.session.currentUser.id !== nextState.session.currentUser.id) {
  //     loadMovieNights();
  //   }
  // };

  if (currentUser) {
    const makeEntry = (movieNight, i) => {
      let hosted = (currentUser.username === movieNight.host ? true : false);
      let host = hosted ? 'You!' : movieNight.host;

      return (
        <MovieNightIndexItem key={i}
          movieNight={movieNight}
          host={host} />
      );
    };


    return (
      <article className='movie-night-index'
        style={{minHeight: `${$(window).height() - 159}px`}}>
        <header className='category-header'>
          <h1 className='page-width'>
            My Movie Nights
          </h1>
        </header>

          <subheader className='category-header'>
            <h2 className='page-width'>
              Upcoming
            </h2>
          </subheader>
          <section className='mn-index-section page-width'>

          <ul>
            {movieNights.upcoming.reverse().map((movieNight, i) => (
              makeEntry(movieNight, i)
            ))}
          </ul>
        </section>

          <subheader className='category-header'>
            <h2 className='page-width'>
              Past
            </h2>
          </subheader>
          <section className='mn-index-section page-width'>

          <ul>
            {movieNights.past.reverse().map((movieNight, i) => (
              makeEntry(movieNight,i)
            ))}
          </ul>
        </section>
      </article>
    );
  } else {
    return (
      <article className='movie-night-index logged-out'
        style={{minHeight: `${$(window).height() - 109}px`}}>
        <header className='category-header'>
          <h1 className='page-width'>
            My Movie Nights
          </h1>
        </header>

        <section className='logged-out-roadblock page-width'>
          <h1>
            Hi there! Start watching movies with your friends with a free Hulubaloo account.
          </h1>

          <p>
            Get unlimited access to our entire video collection when you sign up for free.
            <br /><br />
            You can also check out our example movie nights by choosing Guest Demo.
          </p>

          <RoadblockButtonsContainer />
        </section>
      </article>
    );
  }
};

export default MovieNightIndex;

// make a nice message encouraging user to host a movie night if a section has no movie nights to display (w link to categories bc no search feature)
// eventually: third category 'Happening Now' if movieNight.active
