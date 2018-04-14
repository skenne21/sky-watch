import { combineReducers } from 'redux';
import { spaceXReducer } from './spaceXReducer';
import { videosReducer } from './videosReducer';
import { rocketsReducer } from './rocketsReducer';
import { capsulesReducer } from './capsulesReducer';
import { launchpadsReducers } from './launchpadsReducer';
import { bookmarksReducer } from './bookmarksReducer';
import { userReducer } from './userReducer';
import { launchesReducer } from './launchesReducer';

const rootReducer = combineReducers({
  companyBio: spaceXReducer,
  rockets: rocketsReducer,
  missionVideos: videosReducer,
  capsules: capsulesReducer,
  launchpads: launchpadsReducers,
  bookmarks: bookmarksReducer,
  user: userReducer,
  launches: launchesReducer
});

export default rootReducer;