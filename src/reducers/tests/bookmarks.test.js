import { bookmarksReducer } from '../bookmarksReducer';
import * as actions from '../../actions';
import * as mocks from '../../mockData';

describe('bookmarksReducer', () => {
  it('Should return a empty array if the action is an empty object', () => {
    const expected = [];
    const called = bookmarksReducer(undefined, {});
    expect(called).toEqual(expected);
  });

  it('Should return an array with a bookmark added', () => {
    const expected = [mocks.capsule];
    const action = actions.addBookmarks(mocks.capsule);
    const called = bookmarksReducer(undefined, action);
    expect(called).toEqual(expected);
  });

  it('Should return an array with the bookmark removed', () => {
    const expected = [mocks.capsule];
    const bookmarks = mocks.capsule;
    const action = actions.addBookmarks(bookmarks);
    const called = bookmarksReducer(undefined, action);
    expect(called).toEqual(expected);
  });
});