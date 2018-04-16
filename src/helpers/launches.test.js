import {
  filterLaunches,
  combineLaunches,
  cleanLaunches
} from './cleaners';
import * as mocks from '../mockData';
import { manageLaunches } from './launches';

jest.mock('./cleaners');

describe('manageLaunches', () => {
  it('should call filterLaunches with the right params', () => {
    const launches = mocks.rawLaunches;
    const id = 'falcon1';
    manageLaunches(launches);
    expect(filterLaunches).toHaveBeenCalledWith(launches, id);
  });

  it('should call cleanLaunches with the right params',  () => {
    const launches = mocks.rawLaunches;
    const launch = mocks.launch;
    manageLaunches(launches);
    expect(cleanLaunches).toHaveBeenCalledWith(launch);
  });

  it('should call combineLaunches with the right params',  () => {
    const launches = mocks.rawLaunches;
    manageLaunches(launches);
    expect(cleanLaunches).toHaveBeenCalled();
  });
});