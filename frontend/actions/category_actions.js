export const FETCH_CATEGORIES = 'FETCH_CATEGORIES';
export const FETCH_CATEGORY = 'FETCH_CATEGORY';
export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES';
export const RECEIVE_CATEGORY = 'RECEIVE_CATEGORY';

export const fetchCategories = () => ({
  type: FETCH_CATEGORIES
});

export const fetchCategory = name => ({
  type: FETCH_CATEGORY,
  name
});

export const receiveCategories = categories => ({
  type: RECEIVE_CATEGORIES,
  categories
});

export const receiveCategory = category => ({
  type: RECEIVE_CATEGORY,
  category
});
