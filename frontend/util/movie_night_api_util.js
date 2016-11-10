export const fetchMovieNights = (success, error) => {
  $.ajax({
    method: 'GET',
    url: '/api/movie_nights',
    success,
    error
  });
};

export const fetchMovieNight = (id, success, error) => {
  $.ajax({
    method: 'GET',
    url: `/api/movie_nights/${id}`,
    success,
    error
  });
};

export const createMovieNight = (newMovieNight, success, error) => {
  $.ajax({
    method: 'POST',
    url: '/api/movie_nights',
    data: newMovieNight,
    success,
    error
  });
};
