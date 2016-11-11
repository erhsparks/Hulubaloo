import React from 'react';
import { Link } from 'react-router';

const MovieNightIndexItem = ({ movieNight, host }) => (
  <li className='mn-index-item'>
    <Link to={`movieNight/${movieNight.id}`} >
      <img className='mn-index-item-image'
        src={movieNight.preview_image_url}
        alt={`Poster for ${movieNight.title}`} />

      <section className='movie-night-detail'>
        <h3>
          {movieNight.title}
        </h3>

        <h4>
          {`Hosted by ${host}`}
        </h4>
      </section>

      <aside className={movieNight.active ? 'active' : 'inactive'} />
    </Link>
  </li>
);

export default MovieNightIndexItem;
