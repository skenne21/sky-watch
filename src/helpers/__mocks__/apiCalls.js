import * as mocks from '../../mockData';

export const fetchBio = jest.fn().mockImplementation(() => (
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve(mocks.cleanBio)
  })
));

export const fetchSpaceXVideos = jest.fn().mockImplementation(() => (
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve(mocks.videos)
  })
));

export const fetchRockets = jest.fn().mockImplementation(() => (
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve(mocks.rockets)
  })
));
