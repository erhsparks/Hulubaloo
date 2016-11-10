export const fetchComments = (movieNightId, success, error) => {
  $.ajax({
    method: 'GET',
    url: `/api/movie_nights/${movieNightId}/comments`,
    success,
    error
  });
};

export const fetchComment = (id, success, error) => {
  $.ajax({
    method: 'GET',
    url: `/api/comments/${id}`,
    success,
    error
  });
};

export const createComment = (comment, success, error) => {
  $.ajax({
    method: 'POST',
    url: '/api/comments',
    data: comment,
    success,
    error
  });
};
