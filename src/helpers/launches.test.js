import {
  filterLaunches,
  combineLaunches,
  cleanLaunches
} from './cleaners';
import * as mocks from '../mockData';
import { manageLaunches } from './launches';

jest.mock('./cleaners');

describe.skip('manageLaunches', () => {
  it('should call filterLaunches with the right params', () => {

    const launches = mocks.rawLaunches;
    const id = 'falcon1';
    const called = filterLaunches();
    manageLaunches(launches);
    expect(called).toHaveBeenCalledWith(launches, id);
  });

  it('should call cleanLaunches with the right params',  () => {
    const launches = mocks.rawLaunches;
    const launch = mocks.launch;
    const called = cleanLaunches();
    manageLaunches(launches);
    expect(called).toHaveBeenCalledWith(launch);
  });

  it('should call combineLaunches with the right params',  () => {
    const launches = mocks.rawLaunches;
    const falcon1 = mocks.launch;
    const falcon9 = mocks.launch;
    const falconHeavy = mocks.launch;
    const called = cleanLaunches();
    manageLaunches(launches);
    expect(called).toHaveBeenCalledWith(falcon1, falcon9, falconHeavy);
  });
});