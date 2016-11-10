import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import {
  CategoryReducer,
  CategoriesReducer
} from './category_reducer';
import VideoReducer from './video_reducer';
import {
  MovieNightsReducer,
  MovieNightReducer
} from './movie_night_reducer';
import CommentsReducer from './comments_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  categories: CategoriesReducer,
  category: CategoryReducer,
  video: VideoReducer,
  movieNights: MovieNightsReducer,
  movieNight: MovieNightReducer,
  comments: CommentsReducer
});

export default RootReducer;
