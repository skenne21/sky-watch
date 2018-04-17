import React from 'react';
import { CardsContainer } from './index';
import { shallow } from 'enzyme';
import * as mocks from '../../mockData';
/* eslint-disable no-duplicate-imports*/
import { mapStateToProps } from './index';
/* eslint-enable no-duplicate-imports*/

describe('CardsContainer', () => {
  let wrapper;
  let capsules;
  let rockets;
  let launchpads; 
  let missionVideos;
  let history;
  

  beforeEach(() => {
    history =  { location: { pathname: '/'}};
    capsules = [];
    rockets = [];
    launchpads = [];
    missionVideos = [];
    wrapper = shallow(
      <CardsContainer
        history={history}
        capsules={capsules}
        rockets={rockets}
        launchpads={launchpads}
        missionVideos={missionVideos}
        user={[{}]}
      />
    );
  });

  it('Should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('Should create rockets cards if history equals /rockets', () => {
    history = { location: {pathname: '/rockets'}};
    rockets = mocks.rockets;
    wrapper = shallow(
      <CardsContainer
        history={history}
        capsules={capsules}
        rockets={rockets}
        launchpads={launchpads}
        missionVideos={missionVideos}
        user={[{}]}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('Should create capsules cards if history equals /capsules', () => {
    history = { location: {pathname: '/capsules'}};
    capsules = mocks.capsules;
    wrapper = shallow(
      <CardsContainer
        history={history}
        capsules={capsules}
        rockets={rockets}
        launchpads={launchpads}
        missionVideos={missionVideos}
        user={[{}]}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('Should create launchpads cards if history equals /launchpads', () => {
    history = { location: {pathname: '/launchpads'}};
    launchpads = mocks.launchpads;
    wrapper = shallow(
      <CardsContainer
        history={history}
        capsules={capsules}
        rockets={rockets}
        launchpads={launchpads}
        missionVideos={missionVideos}
        user={[{}]}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('Should create question cards if there is not a user', () => {
    wrapper = shallow(
      <CardsContainer
        history={history}
        capsules={capsules}
        rockets={rockets}
        launchpads={launchpads}
        missionVideos={missionVideos}
        user={[{}]}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });

  describe('mapStateToProps', () => {
    let mockedState, expectedState;

    beforeEach(() => {
      mockedState = {
        capsules: [],
        missionVideos: [],
        launchpads: [],
        rockets: []
      };

      expectedState = {
        capsules: [],
        missionVideos: [],
        launchpads: [],
        rockets: []
      };
    });

    it('Should map capsules to state', () => {
      const capsules = mocks.capsules;
      mockedState.capsules = capsules;
      const mapped  = mapStateToProps(mockedState);
      expectedState.capsules = capsules;
      expect(mapped).toEqual(expectedState);
    });

    it('Should map rockets to state', () => {
      const rockets = mocks.rockets;
      mockedState.rockets = rockets;
      const mapped = mapStateToProps(mockedState);
      expectedState.rockets = rockets;
      expect(mapped).toEqual(expectedState);
    });

    it('Should map missionVideos to state', () => {
      const missionVideos = mocks.videos;
      mockedState.missionVideos = missionVideos;
      const mapped = mapStateToProps(mockedState);
      expectedState.missionVideos = missionVideos;
      expect(mapped).toEqual(expectedState);
    });

    it('Should map launchpads to state', () => {
      const launchpads = mocks.launchpads;
      mockedState.launchpads = launchpads;
      const mapped = mapStateToProps(mockedState);
      expectedState.launchpads = launchpads;
      expect(mapped).toEqual(expectedState);
    });
  });
});