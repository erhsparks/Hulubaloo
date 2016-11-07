import { merge } from 'lodash';
import {
  RECEIVE_CATEGORIES,
  RECEIVE_CATEGORY
} from '../actions/categories_actions';

const _defaultCategoryState = {
  id: null,
  name: '',
  videos: []
};

const _defaultCategoriesState = {};

export const CategoryReducer = (state = _defaultCategoryState, action) => {
  Object.freeze(state);
  Object.freeze(_defaultCategoryState);

  switch (action.type) {
    case RECEIVE_CATEGORY:
      return merge({}, _defaultCategoryState, action.category);
    default:
      return merge({}, state);
  }
};

export const CategoriesReducer = (state = _defaultCategoriesState, action) => {
  Object.freeze(state);
  Object.freeze(_defaultCategoriesState);

  switch (action.type) {
    case RECEIVE_CATEGORIES:
      return merge({}, _defaultCategoriesState, action.categories);
    default:
      return merge({}, state);
  }
};
