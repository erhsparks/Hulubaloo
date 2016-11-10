export const fetchVideo = (id, success, error) => {
  $.ajax({
    method: 'GET',
    url: `/api/videos/${id}`,
    success,
    error
  });
};
