export const fetchAllVideos = (success, error) => {
  $.ajax({
    method: 'GET',
    url: '/api/videos',
    success,
    error
  });
};

export const fetchVideo = (id, success, error) => {
  $.ajax({
    method: 'GET',
    url: `/api/videos/${id}`,
    success,
    error
  });
};

export const fetchAllCategories = (success, error) => {
  $.ajax({
    method: 'GET',
    url: '/api/categories',
    success,
    error
  });
};

export const fetchVideosByCategory = (id, success, error) => {
  $.ajax({
    method: 'GET',
    url: `/api/categories/${id}`,
    success,
    error
  });
};
