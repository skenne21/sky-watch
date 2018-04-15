import React from 'react';
import { shallow } from 'enzyme';
import * as actions from '../../actions';
import { mapStateToProps, mapDispatchToProps } from './index';
/* eslint-disable no-duplicate-imports*/
import { NavBar } from './index';
/* eslint-enable no-duplicate-imports*/

describe('NavBar', () => {
  let wrapper, removeUser, user;

  beforeEach(() => {
    removeUser = jest.fn();
    user = {};
    wrapper = shallow(
      <NavBar
        history={{location: {}}}
        removeUser={removeUser}
        user={user}
      />
    );
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('mapStateToProps', () => {
    let user, mockedState;

    beforeEach(() => { 
      user = {
        name:'bob',
        email:'bob@gmail.com',
        id:1
      };

      mockedState = {
        user: user
      };
    });

    it('Should map user to state', () => {
      const expected = { user };
      const mapped = mapStateToProps(mockedState);
      expect(mapped).toEqual(expected);
    });
  });

  describe('mapDispatchToProps', () => {
    let mapped, mockDispatch, user;

    beforeEach(() => {
      user = {
        name:'bob',
        email:'bob@gmail.com',
        id:1
      };
      mockDispatch = jest.fn();
      mapped = mapDispatchToProps(mockDispatch);
    });

    it('Should dispatch removeUser with the right params', () => {
      mapped.removeUser(user);
      const expected = actions.removeUser(user);
      expect(mockDispatch).toBeCalledWith(expected);
    });
  });
});