import { applyMiddleware } from 'redux';
import SessionMiddleware from './session_middleware';
import VideoMiddleware from './video_middleware';

const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  VideoMiddleware
);

export default RootMiddleware;
