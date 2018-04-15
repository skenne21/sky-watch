import { userReducer } from '../userReducer';
import * as actions from '../../actions';

describe('userReducer', () => {
  it('Should retrun a defualt state if action is undefined', () => {
    const expected = {};
    const called = userReducer(undefined, {});
    expect(called).toEqual(expected);
  });

  it('Should return a new user in state if the action type is ADD_USER', () => {
    const expected = {
      name:'bob',
      email:'bob@gmail.com',
      id: 1
    };

    const user = {
      name:'bob',
      email:'bob@gmail.com',
      id: 1
    };

    const called = userReducer(undefined, actions.addUser(user));
    expect(called).toEqual(expected);
  });

  it('Should return a empty object if the action type is "REMOVE_USER', () => {
    const expected = {};

    const user = {
      name:'bob',
      email:'bob@gmail.com',
      id: 1
    };

    const called = userReducer(undefined, actions.removeUser(user));
    expect(called).toEqual(expected);
  });
});
