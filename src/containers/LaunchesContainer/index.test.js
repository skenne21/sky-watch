import { LaunchesContainer } from './index';
import React from 'react';
import { shallow } from 'enzyme';
import * as mocks from '../../mockData';
import { questions } from '../../mockData/mockQuestions';

describe('LaunchesContainer', () => {
  let wrapper, randomCard, event;

  beforeEach(() => {
    randomCard = questions[0]
    wrapper = shallow(
      <LaunchesContainer
        launches={[mocks.launches]}
        user={[]}
       />
    );
  });

  it('Should match the snapshot if the rockets are empty in state', () => {
    wrapper.setState({cards: [randomCard]})
    expect(wrapper).toMatchSnapshot();
  });

  it('Should have a default state of falcon1 as an empty array', () => {
    expect(wrapper.state('falcon1')).toEqual([]);
  });

  it('Should have a default state of falcon9 as an empty array', () => {
    expect(wrapper.state('falcon9')).toEqual([]);
  });

  it('Should have a default state of falcon9 as an empty array', () => {
    expect(wrapper.state('falconHeavy')).toEqual([]);
  });

  it('Should add falcon1 rockets to state when button with className of falcon1 is clicked', () => {
    event = { target: {name:'falcon1'}}
    wrapper.instance().handleClick(event);
    expect(wrapper.state('falcon1')).toMatchSnapshot();
  });

  it('Should add falcon1 rockets to state when button with className of falcon1 is clicked', () => {
    const expected = [mocks.launches.falcon1]
    event = { target: {name:'falcon9'}}
    wrapper.instance().handleClick(event);

    expect(wrapper.state('falcon9')).toMatchSnapshot()
  });

  it('Should add falcon1 rockets to state when button with className of falcon1 is clicked', () => {
    const expected = [mocks.launches.falcon1]
    event = { target: {name:'falconHeavy'}}
    wrapper.instance().handleClick(event);

    expect(wrapper.state('falconHeavy')).toMatchSnapshot()
  });

});