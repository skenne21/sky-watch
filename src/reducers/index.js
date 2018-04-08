import { combineReducers } from 'redux';
import { spaceXReducer } from './spaceXReducer';
import { videosReducer } from './videosReducer';
import { rocketsReducer } from './rocketsReducer';
import { capsulesReducer } from './capsulesReducer';

const rootReducer = combineReducers({
  companyBio: spaceXReducer,
  rockets: rocketsReducer,
  missionVideos: videosReducer,
  capsules: capsulesReducer
});

export default rootReducer;