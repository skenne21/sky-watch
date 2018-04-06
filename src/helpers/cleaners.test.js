import { cleanVeidos, cleanBios } from './cleaners';
import * as mocks from '../mockData';

describe('cleaners', () => {

  describe('cleanVeidos', () => {

    it.skip('Should return a clean veido', () => {
      const recevied = mocks.rawVeido.items;
      const expected = [mocks.veido]
      const veidos = cleanVeidos(recevied);
      expect(veidos).toEqual(expected);
    });
  });

  describe('cleanBios', () => {
    it.skip('Should return a bio', () => {
      const recevied = mocks.rawBio;
      const expected = mocks.bio;
      const bio = cleanBios(recevied);
      expect(bio).toEqual(expected);
    });

  });

});