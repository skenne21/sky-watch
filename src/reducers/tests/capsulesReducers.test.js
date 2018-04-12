import { capsulesReducer } from '../capsulesReducer';
import * as actions from '../../actions';
import * as mocks from '../../mockData';

it('Should return an empty an array if the state is undefined', () => {
  const expected = [];
  const called = capsulesReducer(undefined, {});
  expect(called).toEqual(expected)
});

it('Should return an array with launchpads in it', () => {
  const expected = mocks.capsules;
  const called = capsulesReducer(undefined, actions.addCapsules(mocks.capsules));
  expect(called).toEqual(expected);
});
