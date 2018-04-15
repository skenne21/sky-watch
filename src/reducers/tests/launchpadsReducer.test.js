import { launchpadsReducers } from '../launchpadsReducer';
import * as actions from '../../actions';
import * as mocks from '../../mockData';

describe('launchpadsReducer', () => {
  it('Should return a default state as an empty array', () => {
    const expected = [];
    const called = launchpadsReducers(undefined, {});
    expect(called).toEqual(expected);
  });

  it('Should return an array with launchpads inside', () => {
    const expected = mocks.launchpads;
    const action = actions.addLaunchPads(mocks.launchpads);
    const called = launchpadsReducers(undefined, action);
    expect(called).toEqual(expected);
  }); 
});