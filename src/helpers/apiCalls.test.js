import * as apiCalls from './apiCalls';
import { cleanBios, cleanVideos, cleanRockets } from './cleaners';
import { youTubeKey } from '../apiKeys';
import * as mocks from '../mockData';


jest.mock('./cleaners');

describe('apiCalls', () => {

  describe('fetchBios', () => {
    let response, url;

    beforeEach(() => {
      response = mocks.rawBio;
      url = 'https://api.spacexdata.com/v2/info';

      window.fetch = jest.fn().mockImplementation(() => (
        Promise.resolve({
          ok: true,
          json: () => Promise.resolve(response)
        })
      ));  
    });

    it('Should fetch with the right url', () => {
      apiCalls.fetchBio();
      expect(window.fetch).toHaveBeenCalledWith(url)
    });

    it('Should return a clean bio', async () =>{
      const expected = mocks.bio;
      const bio = await apiCalls.fetchBio();
      expect(bio).toEqual(expected);
    })

    it('Should call cleanBio with the correct params', () => {

      apiCalls.fetchBio();
      expect(cleanBios).toHaveBeenCalledWith(response);
    })

    it('Should throw an error if the status is above 200', () => {

      window.fetch = jest.fn().mockImplementation(() => (
        Promise.reject({
          status: 500,
          mesage: 'Error'
        })
      ));

      const expected = {
        status: 500,
        mesage: 'Error'
      };

      const apiCall = apiCalls.fetchBio();
      expect(apiCall).rejects.toEqual(expected);
    });
  });

  describe('fetchSpaceXVideos', () => {
    let url, base, condtions, videoInfo, key, response;

    beforeEach(() => {
      key = youTubeKey;
      base = 'https://www.googleapis.com/youtube/v3/search';
      condtions = 'part=snippet&order=viewCount';
      videoInfo = 'q=spaceX+missions&type=video&videoDefinition=high';
      url = `${base}?${condtions}&${videoInfo}&key=${key}`;
      response = mocks.rawVideo;
      window.fetch = jest.fn().mockImplementation(() => (
        Promise.resolve({
          ok: true,
          json: () => Promise.resolve(response)
        })
      ));
    });

    it('Should fetch with the correct url', () =>{
      apiCalls.fetchSpaceXVideos();
      expect(window.fetch).toHaveBeenCalledWith(url)
    })

    it('Should return an array of clean videos', async () => {
      const expected = [mocks.video];
      const videos = await apiCalls.fetchSpaceXVideos();
      expect(videos).toEqual(expected);
    }); 

    it('Should call cleanVideos with the correct params', () =>{
      apiCalls.fetchSpaceXVideos();

      expect(cleanVideos).toHaveBeenCalledWith(response.items);
    });

    it('Should throw an error if the status is above 200', () =>{
      window.fetch = jest.fn().mockImplementation(() => (
        Promise.reject({
          status: 500,
          message: 'Error'
        })
      ));

      const expected = {
        status: 500,
        message: 'Error'
      };
      const apiCall = apiCalls.fetchSpaceXVideos();

      expect(apiCall).rejects.toEqual(expected);

    });
  });

  describe('fetchRockets', () => {
    let url, response;

    beforeEach(() => {
      url = 'https://api.spacexdata.com/v2/rockets'
      response = mocks.rawRockets;
      window.fetch = jest.fn().mockImplementation(() =>(
        Promise.resolve({
          ok: true,
          json: () => Promise.resolve(response)
        })
      ));
    });

    it('Should fetch with the correct url', () => {
      apiCalls.fetchRockets();
      expect(window.fetch).toHaveBeenCalledWith(url);
    });

    it('Should return a clean rockets', async () => {
      const expected = mocks.cleanRockets;
      const rockets = await apiCalls.fetchRockets();
      console.log()
      expect(rockets).toEqual(expected)
    });

    it('Should call cleanRockets with the correct params', () => {

    });

    it('Should throw an error if the status is above 200', () => {

    });
  });

});