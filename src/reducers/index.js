import { combineReducers } from 'redux';
import { spaceXReducer } from './spaceXReducer';
import { videosReducer } from './videosReducer';
import { rocketsReducer } from './rocketsReducer';
import { capsulesReducer } from './capsulesReducer';
import { launchpadsReducers } from './launchpadsReducer';
import { bookmarksReducer } from './bookmarksReducer';

const rootReducer = combineReducers({
  companyBio: spaceXReducer,
  rockets: rocketsReducer,
  missionVideos: videosReducer,
  capsules: capsulesReducer,
  launchpads: launchpadsReducers,
  bookmarks: bookmarksReducer
});

export default rootReducer;