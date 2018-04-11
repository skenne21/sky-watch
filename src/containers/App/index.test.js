import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { fetchBio, fetchSpaceXVideos } from '../../helpers/apiCalls';
import App from './index';

jest.mock('../../helpers/apiCalls');

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App/>);
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('Should match the snapshot', () =>{
    expect(wrapper).toMatchSnapshot();
  });
});

