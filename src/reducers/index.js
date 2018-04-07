import { combineReducers } from 'redux';
import { spaceXReducer } from './spaceXReducer';
import { videosReducer } from './videosReducer';
import { rocketReducer } from './rocketReducer';

const rootReducer = combineReducers({
  companyBio: spaceXReducer,
  rockets: rocketReducer,
  missionVideos: videosReducer
});

export default rootReducer;