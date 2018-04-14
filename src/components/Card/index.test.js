import React from 'react';
import { shallow } from 'enzyme';
import Card from './index';
import * as mocks from '../../mockData';

describe('Card', () => {
  let wrapper, card, addBookmarks;

  beforeEach(() => {
    card = mocks.capsule;
    addBookmarks = jest.mock();

    wrapper = shallow(
      <Card
        card={card}
        className='rocket'
        addBookmarks={addBookmarks}
      />
    );
  });
    
  it('Should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });  
});

