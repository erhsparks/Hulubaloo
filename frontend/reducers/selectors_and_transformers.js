import {
  merge,
  values
} from 'lodash';

export const sortByCurrency = movieNights => {
  movieNights = values(movieNights);

  let sorted = {
    past: [],
    upcoming: []
  };

  movieNights.forEach(movieNight => {
    if (movieNight.currency === 'past') {
      sorted.past.push(movieNight);
    } else sorted.upcoming.push(movieNight);
  });

  return sorted;
};

export const rowsOfFour = videosArray => {
  Object.freeze(videosArray);
  let fours = videosArray.slice(0);
  let placeholder = {
    id: null,
    title: 'Placeholder',
    preview_image_url: ''
  };

  let multiple = fours.length % 4;
  let numPlaceholders = (multiple === 0) ? 0 : 4 - multiple;

  while (numPlaceholders-- > 0) {
    let id = `p${numPlaceholders}`;
    let p = merge({}, placeholder, { id });
    fours.push(p);
  }

  let rows = [];
  for (let i = 0; i < fours.length; i += 4) {
    rows.push(fours.slice(i + 0, i + 4));
  }

  return rows;
};
