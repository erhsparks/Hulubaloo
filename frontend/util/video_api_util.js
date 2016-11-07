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

export const fetchCategory = (name, success, error) => {
  $.ajax({
    method: 'GET',
    url: `/api/categories/${name}`,
    success,
    error
  });
};
