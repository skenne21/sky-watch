import { rocketsReducer } from './rocketsReducer';
import * as actions from '../actions';
import * as mocks from '../mockData';

describe('rocketsReducer', () => {
  it('Should return a default state as an empty array', () => {
    const expected = [];
    const called = rocketsReducer(undefined, {});
    expect(called).toEqual(expected);
  });

  it('Should return an array with rockets inside', () => {
    const expected = mocks.rockets;
    const called = rocketsReducer(undefined, actions.addRockets(mocks.rockets));
    expect(called).toEqual(expected)
  });
  
})