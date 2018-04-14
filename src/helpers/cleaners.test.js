import * as cleaners from './cleaners';
import * as mocks from '../mockData';

describe('cleaners', () => {

  describe('cleanVeidos', () => {
    it('Should return a clean video', async () => {
      const recevied = mocks.rawVideo.items;
      const expected = [mocks.video];
      const videos = await cleaners.cleanVideos(recevied);
      expect(videos).toEqual(expected);
    });
  });

  describe('cleanBios', () => {
    it('Should return a bio', async () => {
      const recevied = mocks.rawBio;
      const expected = mocks.bio;
      const bio = await cleaners.cleanBios(recevied);
      expect(bio).toEqual(expected);
    });
  });

  describe('cleanRockets', () => {
    it('Should return clean rockets', async () => {
      const recevied = mocks.rawRockets;
      const expected = mocks.rockets;
      const rockets = await cleaners.cleanRockets(recevied);
      expect(rockets).toEqual(expected);
    });
  });

  describe('cleanDate' , () => {
    it('Should clean the date', () => {
      const recevied = '2006-03-24';
      const expected = '03, 24, 2006';
      const date = cleaners.cleanDate(recevied);
      expect(date).toEqual(expected)
    });
  });

  describe('cleanCapsules', () => {
    it('Should cleanCapsules', async () => {
      const recevied = mocks.rawCapsules;
      const expected = mocks.capsules;
      const capsule = await cleaners.cleanCapsules(recevied);
      expect(capsule).toEqual(expected);
    });
  });

  describe('cleanLaunchPads', () => {
    it('Should clean launchpads', () => {
      const recevied = mocks.rawLaunchpads;
      const expected = mocks.launchpads;
      const launchpads = cleaners.cleanLaunchpads(recevied);
      expect(launchpads).toEqual(expected);
    });
  });

  describe('Cleanlaunches', () => {
    it('Should clean launchess', () => {
      const recevied = mocks.rawLaunches;
      const expected = mocks.semiClean;
      const launches = cleaners.cleanLaunches(recevied);
      expect(launches).toEqual(expected);
    });
  })

  describe('CombineLaunches', () => {
    it('Should combine launchess', () => {
      const falcon1 = mocks.semiClean[0];
      const falcon9 = mocks.semiClean[1];
      const falconHeavy = mocks.semiClean[2];
      const expected = {
        falcon1,
        falcon9,
        falconHeavy
      };
      const launches = cleaners.combineLaunches(falcon1, falcon9, falconHeavy);
      expect(launches).toEqual(expected);
    });
  });

  describe('filterLaunches', () => {
    it('Should filter launchess', () => {
      const launches = mocks.rawLaunches;
      const called = cleaners.filterLaunches(launches, 'falcon1');
      const expected = mocks.rawLaunches
      expect(launches).toEqual(expected);
    });
  })
});