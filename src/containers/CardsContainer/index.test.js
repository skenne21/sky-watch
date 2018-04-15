import React from 'react';
import CardsContainer from './index'
import { shallow } from 'enzyme';
import * as mocks from '../../mockData';
import { mapStateToProps, mapDispatchToProps } from './index';
import * as actions from '../../actions';

describe('CardsContainer', () => {
  let wrapper;
  let capsules;
  let rockets;
  let launchpads; 
  let missionVideos;
  let history;
  let addToBookmarks;
  let removeBookmark;

  beforeEach(() => {
    history =  { location: { pathname: '/'}};
    capsules = [];
    rockets = [];
    launchpads = [];
    missionVideos = [];
    addToBookmarks = jest.fn();
    removeBookmark = jest.fn();
    wrapper = shallow(
      <CardsContainer
        history={history}
        capsules={capsules}
        rockets={rockets}
        launchpads={launchpads}
        missionVideos={missionVideos}
        addToBookmarks={addToBookmarks}
        removeBookmark={removeBookmark}
        user={[{}]}
      />
    )
  });

  it('Should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('Should create rockets cards if history equals /rockets', () => {
    history = { location: {pathname: '/rockets'}}
    rockets = mocks.rockets
    wrapper = shallow(<CardsContainer
        history={history}
        capsules={capsules}
        rockets={rockets}
        launchpads={launchpads}
        missionVideos={missionVideos}
        addToBookmarks={addToBookmarks}
        removeBookmark={removeBookmark}
        user={[{}]}
      />
    );

    expect(wrapper).toMatchSnapshot();
  })

  it('Should create capsules cards if history equals /capsules', () => {
    history = { location: {pathname: '/capsules'}}
    capsules = mocks.capsules
    wrapper = shallow(<CardsContainer
        history={history}
        capsules={capsules}
        rockets={rockets}
        launchpads={launchpads}
        missionVideos={missionVideos}
        addToBookmarks={addToBookmarks}
        removeBookmark={removeBookmark}
        user={[{}]}
      />
    );

    expect(wrapper).toMatchSnapshot();
  })

  it('Should create launchpads cards if history equals /launchpads', () => {
    history = { location: {pathname: '/launchpads'}}
    launchpads = mocks.launchpads
    wrapper = shallow(<CardsContainer
      history={history}
      capsules={capsules}
      rockets={rockets}
      launchpads={launchpads}
      missionVideos={missionVideos}
      addToBookmarks={addToBookmarks}
      removeBookmark={removeBookmark}
      user={[{}]}
      />
    );

    expect(wrapper).toMatchSnapshot();
  })

  it('Should create question cards if there is not a user' , () => {
    wrapper = shallow(<CardsContainer
      history={history}
      capsules={capsules}
      rockets={rockets}
      launchpads={launchpads}
      missionVideos={missionVideos}
      addToBookmarks={addToBookmarks}
      removeBookmark={removeBookmark}
      user={[]}
      />
    );

    expect(wrapper).toMatchSnapshot();
  });
  
  // it('Should add bookmarks to the store', () => {

  // });

  // it('Should remove bookmarks to the store if it already is in the store', () => {

  // });

  describe('mapStateToProps', () => {
    let mockedState, expectedState, mapped;

    beforeEach(() => {
      mockedState = {
        capsules: [],
        missionVideos: [],
        launchpads: [],
        rockets: [],
        bookmarks: [],
      };

      expectedState = {
        capsules: [],
        missionVideos: [],
        launchpads: [],
        rockets: [],
        bookmarks: [],

      };


    });

    it('Should map capsules to state' , () => {
      const capsules = mocks.capsules;
      mockedState.capsules = capsules;
      const mapped  = mapStateToProps(mockedState);
      expectedState.capsules = capsules;
      expect(mapped).toEqual(expectedState);
    });

    it('Should map rockets to state' , () => {
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

    it('Should map bookmarks to state', () => {
      const bookmarks = mocks.capsules;
      mockedState.bookmarks = mocks.capsule;
      const mapped = mapStateToProps(mockedState);
      expectedState.bookmarks = mocks.capsule;
      expect(mapped).toEqual(expectedState);
    });
  });

  describe('Dispacth to state', () => {
    let mapped, mockDispatch;

    beforeEach(() => {
      mockDispatch = jest.fn();
      mapped = mapDispatchToProps(mockDispatch)
    });

    it('Should Dispacth addToBookmarks with the right params', () => {
      const bookmark = mocks.capsule;

      mapped.addToBookmarks(bookmark);

      const expected = actions.addBookmarks(bookmark);

      expect(mockDispatch).toHaveBeenCalledWith(expected);
    });

    it('Should dispatch removeBookmark with the right params', () => {
      const bookmark = mocks.capsule;

      mapped.removeBookmark(bookmark);

      const expected = actions.removeBookmark(bookmark);

      expect(mockDispatch).toHaveBeenCalledWith(expected);
    });

  });

})