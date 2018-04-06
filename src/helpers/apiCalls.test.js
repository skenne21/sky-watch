import * as apiCalls from './apiCalls';
import { cleanBios, cleanVeidos } from './cleaners';
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
      expect(bio).toEqual(expected)
    })

    it('Should call cleanBio with the correct params', () => {

      apiCalls.fetchBio();
      expect(cleanBios).toHaveBeenCalledWith(response)
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
      }

      const apiCall = apiCalls.fetchBio();
      expect(apiCall).rejects.toEqual(expected)
    })
  });

});