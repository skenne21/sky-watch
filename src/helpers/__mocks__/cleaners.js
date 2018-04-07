import { video, bio,  rockets } from '../../mockData';

export const cleanVideos = jest.fn().mockImplementation(() => [video]);

export const cleanBios = jest.fn().mockImplementation(() => bio);

export const cleanRockets = jest.fn().mockImplementation(() => rockets);

export const cleanDate = jest.fn().mockImplementation(() => "03, 24, 2006")
