import { applyMiddleware } from 'redux';
import SessionMiddleware from './session_middleware';
import CategoryMiddleware from './category_middleware';
import VideoMiddleware from './video_middleware';
import MovieNightMiddleware from './movie_night_middleware';
import CommentMiddleware from './comment_middleware';

const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  CategoryMiddleware,
  VideoMiddleware,
  MovieNightMiddleware,
  CommentMiddleware
);

export default RootMiddleware;
