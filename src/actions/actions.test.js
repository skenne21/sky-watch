import * as actions from './index';
import * as mocks from '../mockData';

describe('Actions', () =>{
  
  it('Should add a company bio', () => {
    const bio = mocks.bio;
    const expected = {
      type: 'ADD_COMPANY_BIO',
      bio
    };

    expect(actions.addCompanyBio(bio)).toEqual(expected);
  });

  it('Should add an array of videos', () => {
    const videos = mocks.veidos;
    const expected = {
      type: 'ADD_VIDEOS',
      videos
    };

    expect(actions.upLoadVideos(videos)).toEqual(expected);
  });

  it('Should add a error message', () => {
    const message = 'Error happend';
    const expected = {
      type: 'ADD_ERROR',
      message
    };
    expect(actions.addError(message)).toEqual(expected);
  });

  it('Should add Rockets to the store', () =>{
    const rockets = mocks.rockets;
    const expected = {
      type: 'ADD_ROCKETS',
      rockets
    };
    expect(actions.addRockets(rockets)).toEqual(expected);
  });

  it('Should add capsules to the store', () => {
    const capsules = mocks.cleanCapsules;
    const expected = {
      type: 'ADD_CAPSULES',
      capsules
    };
    expect(actions.addCapsules(capsules)).toEqual(expected);
  })

  it('Should add launchpads to the store', () => {
    const launchpads = mocks.cleanLaunchpads;
    const expected = {
      type:'ADD_LAUNCHPADS',
      launchpads
    };
    expect(actions.addLaunchPads(launchpads)).toEqual(expected);
  });
});