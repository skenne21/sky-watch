import { spaceXReducer } from './spaceXReducer';
import * as actions from '../actions';
import * as mocks from '../mockData';

describe('spaceXReducer', () =>{
  it('Should return a default state as an empty array', () => {
    const expected = [];
    const called = spaceXReducer(undefined, {});
    expect(called).toEqual(expected);
  });

  it('Should return an array with bio inside', () => {
    const expected = [mocks.bio];
    const called = spaceXReducer(undefined, actions.addCompanyBio(mocks.bio));
    expect(called).toEqual(expected);
  });

  it('Shoould return an error message', () => {
    const message = 'Error happened';
    const expected = ['Error happened'];
    const called = spaceXReducer(undefined, actions.addError(message));
    expect(called).toEqual(expected);
  });
});