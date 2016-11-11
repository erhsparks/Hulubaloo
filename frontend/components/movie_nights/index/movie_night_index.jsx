import React from 'react';
import MovieNightIndexItem from './movie_night_index_item';

const MovieNightIndex = ({ movieNights, currentUsername }) => {
  const makeEntry = (movieNight, i) => {
    let hosted = (currentUsername === movieNight.host ? true : false);
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
          {movieNights.upcoming.map((movieNight, i) => (
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
          {movieNights.past.map((movieNight, i) => (
            makeEntry(movieNight,i)
          ))}
        </ul>
      </section>
    </article>
  );
};

export default MovieNightIndex;

// make a nice message encouraging user to host a movie night if a section has no movie nights to display (w link to categories bc no search feature)
// eventually: third category 'Happening Now' if movieNight.active
