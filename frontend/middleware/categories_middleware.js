import {
  fetchCategories,
  fetchCategory
} from '../util/video_api_util';

import {
  FETCH_CATEGORIES,
  FETCH_CATEGORY,
  receiveCategories,
  receiveCategory
} from '../actions/categories_actions';

const CategoriesMiddleware = ({ dispatch }) => next => action => {
  const fetchError = err => console.log(err.responseJSON);

  switch(action.type) {
    case FETCH_CATEGORIES:
      const categoriesSuccess = categories => dispatch(receiveCategories(categories));
      fetchCategories(categoriesSuccess, fetchError);
      return next(action);
    case FETCH_CATEGORY:
      const categorySuccess = category => dispatch(receiveCategory(category));
      fetchCategory(action.id, categorySuccess, fetchError);
      return next(action);
    default:
      return next(action);
  }
};

export default CategoriesMiddleware;
