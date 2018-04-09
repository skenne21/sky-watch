import React from 'react';
import { shallow } from 'enzyme';
import Rocket from './Rocket';
import * as mocks from '../../mockData';

describe('Rocket', () =>{
  it("Should match the snapshot", () => {
    const rocket = mocks.cleanRocket;
    const wrapper = shallow(<Rocket rocket={rocket}/>);
    expect(wrapper).toMatchSnapshot();
  });
});
