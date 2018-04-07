import { combineReducers } from 'redux';
import { spaceXReducer } from './spaceXReducer';
import { videosReducer } from './videosReducer';
import { rocketsReducer } from './rocketsReducer';

const rootReducer = combineReducers({
  companyBio: spaceXReducer,
  rockets: rocketsReducer,
  missionVideos: videosReducer
});

export default rootReducer;