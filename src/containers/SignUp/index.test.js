import React from 'react';
import { shallow } from 'enzyme';
import { mapStateToProps, mapDispatchToProps } from './index';
import * as actions from '../../actions';
import * as mocks from '../../mockData';
import  { SignUp } from './index';

describe('SignUp', () => {
  let wrapper, user, addUser, history;

  beforeEach(() => {
    history = {};
    addUser= jest.fn();
    user = { name: 'bob', id: 1, email: 'h@aol.com'};

    wrapper = shallow(
      <SignUp 
        history={history}
        addUser={addUser}
        user={user}
      />
    );
  });

  it('Should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('Should have a default state of name as a empty string', () => {
    expect(wrapper.state('name')).toEqual('');
  });

  it('Should have a defualt state of email as an empty string', () => {
    expect(wrapper.state('email')).toEqual('');
  });

  it('Should have a defualt state of passowrd as a empty string', () => {
    expect(wrapper.state('error')).toEqual('');
  });

   describe('mapStateToProps', () => {
    it('Should map user to state', () => {
      const mockedState = { user: user };
      const expected = { user: user };
      const mapped = mapStateToProps(mockedState);
      expect(mapped).toEqual(expected);
    });
  });

  describe('mapDispatchToProps', () => {
    it('Should dispatch addUser with the right params', () => {
      const mockedDispatch = jest.fn();
      const mapped = mapDispatchToProps(mockedDispatch);

      mapped.addUser(user);
      const expected = actions.addUser(user);

      expect(mockedDispatch).toHaveBeenCalledWith(expected);
    });
  });

});