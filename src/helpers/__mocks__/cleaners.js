import {veido, bio} from '../../mockData';

export const cleanVeidos = jest.fn().mockImplementation(() => veido)

export const cleanBios = jest.fn().mockImplementation(() => bio)