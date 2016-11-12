import {
  fetchCategories,
  fetchCategory
} from '../util/category_api_util';

import {
  FETCH_CATEGORIES,
  FETCH_CATEGORY,
  receiveCategories,
  receiveCategory
} from '../actions/category_actions';

const CategoryMiddleware = ({ dispatch }) => next => action => {
  switch(action.type) {
    case FETCH_CATEGORIES:
      const categoriesSuccess = categories => dispatch(receiveCategories(categories));
      fetchCategories(categoriesSuccess);
      return next(action);
    case FETCH_CATEGORY:
      const categorySuccess = category => dispatch(receiveCategory(category));
      fetchCategory(action.name, categorySuccess);
      return next(action);
    default:
      return next(action);
  }
};

export default CategoryMiddleware;
