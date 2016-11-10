export const FETCH_MOVIE_NIGHTS = 'FETCH_MOVIE_NIGHTS';
export const RECEIVE_MOVIE_NIGHTS = 'RECEIVE_MOVIE_NIGHTS';
export const FETCH_MOVIE_NIGHT = 'FETCH_MOVIE_NIGHT';
export const RECEIVE_MOVIE_NIGHT = 'RECEIVE_MOVIE_NIGHT';
export const CREATE_MOVIE_NIGHT = 'CREATE_MOVIE_NIGHT';
export const ADD_MOVIE_NIGHT = 'ADD_MOVIE_NIGHT';

export const fetchMovieNights = () => ({
  type: FETCH_MOVIE_NIGHTS
});

export const receiveMovieNights = movieNights => ({
  type: RECEIVE_MOVIE_NIGHTS,
  movieNights
});

export const fetchMovieNight = id => ({
  type: FETCH_MOVIE_NIGHT,
  id
});

export const receiveMovieNight = movieNight => ({
  type: RECEIVE_MOVIE_NIGHT,
  movieNight
});

export const createMovieNight = movieNight => ({
  type: CREATE_MOVIE_NIGHT,
  movieNight
});

export const addMovieNight = movieNight => ({
  type: ADD_MOVIE_NIGHT,
  movieNight
});
