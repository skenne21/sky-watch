import React from 'react';
import { shallow } from 'enzyme';
import { mapStateToProps, mapDispatchToProps } from './index';
import * as actions from '../../actions';
import * as mocks from '../../mockData';
import  { SignIn } from './index';

describe('SignIn', () => {
  let wrapper, user, addUser, history;

  beforeEach(() => {
    history = {};
    user = {
      name:'Bob',
      email:'bob@gmail.com',
      id:1
    };
    addUser = jest.fn();

    wrapper = shallow(
      <SignIn
        history={history}
        user={user}
        addUser={addUser}
      />
    );
  });

  it('Should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
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