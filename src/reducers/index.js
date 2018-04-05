import { combineReducers } from 'redux';
import { spaceXReducer } from './spaceXReducer';

const rootReducer = combineReducers({
  companyBio: spaceXReducer
});

export default rootReducer;