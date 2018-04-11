import { videosReducer } from './videosReducer';
import * as actions from '../actions';
import * as mocks from '../mockData';

describe('videosReducer', () => {
  it('Should return a default state', () => {
    const expected = [];
    const called = videosReducer(undefined, {});
    expect(called).toEqual(expected);
  });

  it('Should return an array with videos inside it', () => {
    const videos = mocks.videos;
    const expected = mocks.videos;
    const called = videosReducer(undefined, actions.upLoadVideos(videos));
    expect(called).toEqual(expected);
  });
});