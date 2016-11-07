export const fetchVideo = (id, success, error) => {
  $.ajax({
    method: 'GET',
    url: `/api/videos/${id}`,
    success,
    error
  });
};

export const fetchCategories = (success, error) => {
  $.ajax({
    method: 'GET',
    url: '/api/categories',
    success,
    error
  });
};

export const fetchCategory = (id, success, error) => {
  $.ajax({
    method: 'GET',
    url: `/api/categories/${id}`,
    success,
    error
  });
};
