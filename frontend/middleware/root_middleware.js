import { applyMiddleware } from 'redux';
import SessionMiddleware from './session_middleware';
import CategoryMiddleware from './category_middleware';
import VideoMiddleware from './video_middleware';

const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  CategoryMiddleware,
  VideoMiddleware
);

export default RootMiddleware;
