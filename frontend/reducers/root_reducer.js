import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import {
  CategoryReducer,
  CategoriesReducer
} from './category_reducer';
import VideoReducer from './video_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  categories: CategoriesReducer,
  category: CategoryReducer,
  video: VideoReducer
});

export default RootReducer;
