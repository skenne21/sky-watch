import React from 'react';
import { shallow } from 'enzyme';
import * as apiCalls from '../../helpers/apiCalls';
import * as actions from '../../actions';
import { mapStateToProps, mapDispatchToProps } from './index';
import { Homepage }from './index';
import * as mocks from '../../mockData';
import { 
  fetchRockets,
  fetchCapsules,
  fetchLaunchpads } from '../../helpers/apiCalls';

jest.mock('../../helpers/apiCalls');

describe('Homepage Container', () => {
  let wrapper;
  let getRockets;
  let getCapsules;
  let getLaunchPads;
  let handleError;
  let companyBio;
  let missionVideos;
  let capsules;
  let launchpads;

  beforeEach(() => {
    getRockets = jest.fn();
    getCapsules = jest.fn();
    getLaunchPads = jest.fn();
    handleError=  jest.fn();
    companyBio=[];
    missionVideos =[];
    capsules= [];
    launchpads= [];

    wrapper = shallow(
      <Homepage
        getRockets={getRockets}
        getCapsules={getCapsules}
        getLaunchPads={getLaunchPads}
        handleError={handleError}
        companyBio={companyBio}
        missionVideos={missionVideos}
        capsules={capsules}
        launchpads={launchpads} 
      />
    );
  });

  it('Should match the snapshot if the bio has length', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('Should Match the snapshot if there is no length to the bio', () => {
    wrapper = shallow(
      <Homepage
        getRockets={getRockets}
        getCapsules={getCapsules}
        getLaunchPads={getLaunchPads}
        handleError={handleError}
        companyBio={[]}
        missionVideos={missionVideos}
        capsules={capsules}
        launchpads={launchpads} 
      />
    );
    expect(wrapper).toMatchSnapshot();
  })

  it('Should call handleRockets when clicked', () => {
    const navlink = wrapper.find('.rockets').simulate('click')
    expect(fetchRockets).toHaveBeenCalled();
  });

  it('Should call handleCapsules when clicked', () => {
    const navlink = wrapper.find('.capsules').simulate('click')
    expect(fetchCapsules).toHaveBeenCalled();
  });

  it('Should call handleLaunchpads when clicked', () => {
    const navlink = wrapper.find('.launchpad').simulate('click')
    expect(fetchLaunchpads).toHaveBeenCalled();
  });

  it('Should call handleLaunches when clicked', () => {
    const navlink = wrapper.find('.launches').simulate('click')
    expect(fetchLaunchpads).toHaveBeenCalled();
  });

  describe('mapStateToProps', () => {
    let mockedState, expectedState;
    beforeEach(() => {
      mockedState = {
        companyBio: [],
        missionVideos: [],
        rockets: [],
        capsules: [],
        launchpads: [],
        user: {}
      }

      expectedState = {
        companyBio: [],
        missionVideos: [],
        rockets: [],
        capsules: [],
        launchpads: [],
        user: {}
      }
    })

    it('should map companyBio to state', () => {
      const bio = mocks.bio;
      mockedState.companyBio = [bio];
      const mapped = mapStateToProps(mockedState);
      expectedState.companyBio = [bio];
      expect(mapped).toEqual(expectedState);
    });

    it('Should map missionVideos to state', () => {
      const videos = mocks.videos;
      mockedState.missionVideos = videos;
      const mapped = mapStateToProps(mockedState);
      expectedState.missionVideos = videos;
      expect(mapped).toEqual(expectedState);
    });

    it('Should map Rockets to state', () => {
      const rockets = mocks.rockets;
      mockedState.rockets = rockets;
      const mapped = mapStateToProps(mockedState);
      expectedState.rockets = rockets;
      expect(mapped).toEqual(expectedState);
    });

    it('Should map capsules to state' , () => {
      const capsules = mocks.capsules;
      mockedState.capsules = capsules;
      const mapped = mapStateToProps(mockedState);
      expectedState.capsules = capsules;
      expect(mapped).toEqual(expectedState);
    });

    it('Should map launchpads to state', () => {
      const launchpads = mocks.launchpads;
      mockedState.launchpads = launchpads;
      const mapped = mapStateToProps(mockedState);
      expectedState.launchpads = launchpads;
      expect(mapped).toEqual(expectedState);
    });

    it('Should map user to state', () => {
      const user = {
        name:'bob',
        id: 1,
        email:'bob@gmail.com'
      };

      mockedState.user = user;
      const mapped = mapStateToProps(mockedState);
      expectedState.user = user;
      expect(mapped).toEqual(expectedState);
    });
  });

  describe('MapDispatchToProps', () => {
    let mockedDispatch, mapped;

    beforeEach(() => {
      mockedDispatch = jest.fn();
      mapped = mapDispatchToProps(mockedDispatch);
    })

    it('Should dispatch getRockets with the right params', () => {
      const rockets = mocks.rockets;
      mapped.getRockets(rockets);
      const expected = actions.addRockets(rockets);

      expect(mockedDispatch).toHaveBeenCalledWith(expected);
    });

    it('Should dispatch getCapsules with the right params', () => {
      const capsules = mocks.capsules;
      mapped.getCapsules(capsules);

      const expected = actions.addCapsules(capsules);

      expect(mockedDispatch).toHaveBeenCalledWith(expected);
    });

    it('Should dispatch getLaunchPads with the right params', () => {
      const launchpads = mocks.launchpads;
      mapped.getLaunchpads(launchpads);
      const expected = actions.addLaunchPads(launchpads);

      expect(mockedDispatch).toHaveBeenCalledWith(expected);
    });

    it('Should dispatch handleError with the right params', ( ) => {
      const error = { message: 'error'};
      mapped.handleError(error.message);

      const expected = actions.addError(error.message);
      expect(mockedDispatch).toHaveBeenCalledWith(expected);
    })
  });
});