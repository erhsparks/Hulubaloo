import { applyMiddleware } from 'redux';
import SessionMiddleware from './session_middleware';
import CategoriesMiddleware from './categories_middleware';
import VideoMiddleware from './video_middleware';

const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  CategoriesMiddleware,
  VideoMiddleware
);

export default RootMiddleware;
