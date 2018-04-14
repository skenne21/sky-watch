import * as mocks from '../../mockData';

export const fetchBio = jest.fn()
  .mockImplementationOnce(() => (mocks.cleanBio))
  .mockImplementationOnce(() => ({
    error: "An error happened"
  }));

export const fetchSpaceXVideos = jest.fn()
  .mockImplementationOnce(() => (mocks.video))
  .mockImplementationOnce(() => ({
    error: "An error happened"
  }));

export const fetchRockets = jest.fn()
  .mockImplementationOnce(() => (mocks.rockets))
  .mockImplementationOnce(() => ({
    error: "An error happened"
  }));

export const fetchCapsules = jest.fn()
  .mockImplementationOnce(() => (mocks.capsules))
  .mockImplementationOnce(() => ({
    error: "An error happened"
  }));

export const fetchLaunchpads = jest.fn()
  .mockImplementationOnce(() => (mocks.launchpads))
  .mockImplementationOnce(() => ({
    error: "An error happened"
  }));

export const fetchLaunches = jest.fn()
  .mockImplementationOnce(() => (mocks.launches))
  .mockImplementationOnce(() => ({
    error: "An error happened"
  }));