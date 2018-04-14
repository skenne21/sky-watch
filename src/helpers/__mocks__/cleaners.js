import * as mocks from '../../mockData';

export const cleanVideos = jest.fn()
  .mockImplementation(() => [mocks.video]);

export const cleanBios = jest.fn()
  .mockImplementation(() => mocks.bio);

export const cleanRockets = jest.fn()
  .mockImplementation(() => mocks.rockets);

export const cleanDate = jest.fn()
  .mockImplementation(() => "03, 24, 2006");

export const cleanCapsules = jest.fn()
  .mockImplementation(() => mocks.capsules);

export const cleanLaunchpads = jest.fn()
  .mockImplementation(() => mocks.launchpads);

export const cleanLaunches = jest.fn()
  .mockImplementation(() => mocks.launch);

export const combineLaunches = jest.fn()
  .mockImplementation(() => mocks.launches);

export const filterLaunches = jest.fn()
  .mockImplementation(() => mocks.launch)