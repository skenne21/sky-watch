import React from 'react';
import { shallow } from 'enzyme';
import { mapStateToProps, mapDispatchToProps } from './index';
import * as actions from '../../actions';
// import * as mocks from '../../mockData';
/* eslint-disable no-duplicate-imports*/
import  { SignIn } from './index';
/* eslint-enable no-duplicate-imports*/

describe('SignIn', () => {
  let wrapper, user, addUser, history;

  beforeEach(() => {
    history = {push: jest.fn()};
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

  it('Should call hangleChange and set change to state', () => {
    const event = { target: {
      name: 'email',
      value: 'bob@gmail.com'
    }};

    expect(wrapper.state('email')).toEqual('');
    wrapper.instance().handleChange(event);
    expect(wrapper.state('email')).toEqual('bob@gmail.com');  
  });

  it('Should handleUser and reset state', () => {
    const user = {
      name:'bob',
      email: 'bob@gmail.com', 
      password: 'password'
    };

    wrapper.setState({
      name:'bob',
      email: 'bob@gmail.com', 
      password: 'password'
    });

    expect(wrapper.state('email')).toEqual('bob@gmail.com');
    expect(wrapper.state('password')).toEqual('password');
    expect(wrapper.state('name')).toEqual('bob');

    wrapper.instance().handleUser(user);

    expect(wrapper.state('email')).toEqual('');
    expect(wrapper.state('password')).toEqual('');
    expect(wrapper.state('name')).toEqual('');
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