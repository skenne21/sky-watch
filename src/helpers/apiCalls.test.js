import * as apiCalls from './apiCalls';
import { cleanBios, cleanVeidos } from './cleaners';
import { youTubeKey } from '../apiKeys';
import * as mocks from '../mockData';


jest.mock('./cleaners');

describe('apiCalls', () => {

  describe('fetchBios', () => {
    let response, url;

    beforeEach(() => {
      response = mocks.rawBiol;
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

  describe('fetchSpaceXVeidos', () => {
    let url, base, condtions, veidoInfo, key, response;

    beforeEach(() => {
      key = youTubeKey;
      base = 'https://www.googleapis.com/youtube/v3/search';
      condtions = 'part=snippet&order=viewCount';
      veidoInfo = 'q=spaceX+missions&type=video&videoDefinition=high';
      url = `${base}?${condtions}&${veidoInfo}&key=${key}`;
      response = mocks.rawVeido;
      window.fetch = jest.fn().mockImplementation(() => (
        Promise.resolve({
          ok: true,
          json: () => Promise.resolve(response)
        })
      ));
    });

    it('Should fetch with the correct url', () =>{
      apiCalls.fetchSpaceXVeidos();
      expect(window.fetch).toHaveBeenCalledWith(url)
    })

    it('Should return an array of clean videos', async () => {
      const expected = [mocks.veido];
      const veidos = await apiCalls.fetchSpaceXVeidos();
      expect(veidos).toEqual(expected)
    })

    it('Should call cleanVeidos with the correct params', () =>{
      apiCalls.fetchSpaceXVeidos();
      expect(cleanVeidos).toHaveBeenCalledWith(response.items)
    })

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
      const apiCall = apiCalls.fetchSpaceXVeidos();

      expect(apiCall).rejects.toEqual(expected)

    })
  })

});