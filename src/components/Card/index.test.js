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
        user={[]}
      />
    );
  });
    
  it('Should match the snapshot if there is no user', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('Should match the snapshot if there is a user', () => {
     wrapper = shallow(
      <Card
        card={card}
        className='rocket'
        addBookmarks={addBookmarks}
        user={[{}]}
      />
    )
    expect(wrapper).toMatchSnapshot();
  });  
});

