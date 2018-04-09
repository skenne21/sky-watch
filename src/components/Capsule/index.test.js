import React from 'react';
import { shallow } from 'enzyme';
import { capsule } from '../../mockData';
import Capsule from './Capsule';

describe('Capsule', () => {
  it('Should match the snapshot', () => {
    const wrapper = shallow(
      <Capsule
        capsule={capsule}
      />
    );

    expect(wrapper).toMatchSnapshot();
  });
});