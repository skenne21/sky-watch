import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { 
  fetchBio, fetchSpaceXVideos } from '../../helpers/apiCalls';
import { mapStateToProps, mapDispatchToProps } from './index';
import * as mocks from '../../mockData';
import * as actions from '../../actions';
import { App } from './index';


jest.mock('../../helpers/apiCalls');

describe('App', () => {
  let wrapper;
  let mockFetchCompany;
  let mockFetchVideos;
  let mockHandleError;
  let companyBio;
  let missionVideos;

  beforeEach(() => {
    mockFetchCompany = jest.fn();
    mockFetchVideos = jest.fn();
    mockHandleError = jest.fn();
    companyBio = mocks.bio;
    missionVideos = mocks.videos;
    wrapper = shallow(
      <App
        fetchCompanyBio={mockFetchCompany}
        fetchMissionVideos={mockFetchVideos}
        handleError={mockHandleError}
        companyBio={companyBio}
        missionVideos={missionVideos}
      />
    );
  });

  it('Should match the snapshot', () =>{
    expect(wrapper).toMatchSnapshot();
  });

  it('Should call fetchCompanyBio', () => {
    wrapper.instance().fetchData();
    expect(fetchBio).toHaveBeenCalled()
  });

  it('Should call fetchCompanyBio', () => {
    wrapper.instance().fetchVideos();
    expect(fetchSpaceXVideos).toHaveBeenCalled()
  });

  describe('mapStateToProps', () => {
    let mappedState, expectedState;

    beforeEach(() => {
      mappedState = {
        companyBio: [],
        missionVideos: []
      };
      expectedState = {
        companyBio: [],
        missionVideos: []
      };
    });

    it('Should map companyBio to state', () => {
      mappedState.companyBio = mocks.bio;
      expectedState.companyBio = mocks.bio;
      const called = mapStateToProps(mappedState);
      expect(called).toEqual(expectedState);
    });

    it('Should map missionVideos to state', () => {
      mappedState.missionVideos = mocks.video;
      expectedState.missionVideos = mocks.video;
      const called = mapStateToProps(mappedState);
      expect(called).toEqual(expectedState);
    });
  });

  describe('map dispatch to state', () => {
    let mockedDispatch, mapped;

    beforeEach(() => {
      mockedDispatch = jest.fn();
      mapped = mapDispatchToProps(mockedDispatch);
    });

    it('Should map fetchCompanyBio to dispatch', () => {
      const expected = actions.addCompanyBio(mocks.bio);
      mapped.fetchCompanyBio(mocks.bio);
      expect(mockedDispatch).toHaveBeenCalledWith(expected);
    });

    it('Should map fetchMissionVideos to dispatch', () => {
      const expected = actions.upLoadVideos(mocks.videos);
      mapped.fetchMissionVideos(mocks.videos);
      expect(mockedDispatch).toHaveBeenCalledWith(expected);
    });

    it('Should map handleError to dispatch', () => {
      const error = 'Error Happened'
      const expected = actions.addError(error);
      mapped.handleError(error);
      expect(mockedDispatch).toHaveBeenCalledWith(expected);
    });
  });
});

