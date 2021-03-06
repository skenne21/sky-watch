import * as actions from './index';
import * as mocks from '../mockData';

describe('Actions', () =>{
  describe('ADD_COMPANY_BIO', () => {
    it('Should add a company bio', () => {
      const bio = mocks.bio;
      const expected = {
        type: 'ADD_COMPANY_BIO',
        bio
      };
      expect(actions.addCompanyBio(bio)).toEqual(expected);
    });
  });

  describe('ADD_VIDEOS', () => {
    it('Should add an array of videos', () => {
      const videos = mocks.veidos;
      const expected = {
        type: 'ADD_VIDEOS',
        videos
      };
      expect(actions.upLoadVideos(videos)).toEqual(expected);
    });
  });

  describe('ADD_ERROR', () => {
    it('Should add a error message', () => {
      const message = 'Error happend';
      const expected = {
        type: 'ADD_ERROR',
        message
      };
      expect(actions.addError(message)).toEqual(expected);
    });
  });
  
  describe('ADD_ROCKETS', () => {
    it('Should add Rockets to the store', () =>{
      const rockets = mocks.rockets;
      const expected = {
        type: 'ADD_ROCKETS',
        rockets
      };
      expect(actions.addRockets(rockets)).toEqual(expected);
    });
  });
  
  describe('ADD_CAPSULES', () => {
    it('Should add capsules to the store', () => {
      const capsules = mocks.capsules;
      const expected = {
        type: 'ADD_CAPSULES',
        capsules
      };
      expect(actions.addCapsules(capsules)).toEqual(expected);
    });
  });
  
  describe('ADD_LAUNCHPADS', () => {
    it('Should add launchpads to the store', () => {
      const launchpads = mocks.launchpads;
      const expected = {
        type:'ADD_LAUNCHPADS',
        launchpads
      };
      expect(actions.addLaunchPads(launchpads)).toEqual(expected);
    });
  });
  
  describe('ADD_USER', () => {
    it('Should add a user', () => {
      const user = {
        name: 'bob',
        email: 'bob@gmail.com',
        id: 1
      };
      const expected = {
        type:'ADD_USER',
        user
      };
      expect(actions.addUser(user)).toEqual(expected);
    });
  });

  describe('REMOVE_USER', () => {
    it('Should remove a user', () => {
      const user = {
        name: 'bob',
        email: 'bob@gmail.com',
        id: 1
      };

      const expected = {
        type:'REMOVE_USER',
        user
      };
      expect(actions.removeUser(user)).toEqual(expected);
    });
  });

  describe("ADD_LAUNCHES", () => {
    it('Should add Launches', () => {
      const launches = mocks.launches;
      const expected = {
        type: "ADD_LAUNCHES",
        launches
      };
      expect(actions.addLaunches(launches)).toEqual(expected);
    });
  });
});