import React from 'react';
import { shallow } from 'enzyme';
import Launchpad from './Launchpad';
import { launchpad } from '../../mockData';

describe('Launchpad', () => {
  it('Should match the snapshot', () => {
    const wrapper = shallow(
      <Launchpad 
        launchpad={launchpad} 
      />
    );

    expect(wrapper).toMatchSnapshot();

  });
});