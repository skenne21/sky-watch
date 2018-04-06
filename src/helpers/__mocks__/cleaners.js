import { video, bio } from '../../mockData';

export const cleanVideos = jest.fn().mockImplementation(() => [video])

export const cleanBios = jest.fn().mockImplementation(() => bio)