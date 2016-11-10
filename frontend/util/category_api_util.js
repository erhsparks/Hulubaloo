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
