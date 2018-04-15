import { launchesReducer } from '../launchesReducer';
import * as actions from '../../actions';
import * as mocks from '../../mockData';

describe('launchesReducer', () => {
  it('Should add a default state of an array if action undefined', () => {
    const expected = [];
    const called = launchesReducer(undefined, {});
    expect(called).toEqual(expected);
  });

  it('Should add launches to state if aciton type is ADD_LAUNCHES', () => {
    const expected = [mocks.launches];
    const launches = mocks.launches;
    const called = launchesReducer(undefined, actions.addLaunches(launches));
    expect(called).toEqual(expected);
  });
});
