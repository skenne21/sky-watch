import * as mocks from '../../mockData';

export const manageLaunches = jest.fn()
  .mockImplementation(( ) => mocks.launches);