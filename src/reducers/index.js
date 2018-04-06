import { combineReducers } from 'redux';
import { spaceXReducer } from './spaceXReducer';
import { videosReducer } from './videosReducer';

const rootReducer = combineReducers({
  companyBio: spaceXReducer,
  missionVideos: videosReducer
});

export default rootReducer;