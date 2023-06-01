import { locationSearch } from '@/shared/config/jest/mocks/dom';
import {
  addSearchParams,
  buildSearchParams,
  getSearchParams,
} from './search-params';

describe('test shared/lib/search-params', () => {
  describe('add-search-params', () => {
    it('params must be added to location.href', () => {
      addSearchParams({ name: 'denis', position: 'developer' });
      expect(window.location.href).toContain('?name=denis&position=developer');
    });
  });

  describe('build-search-params', () => {
    it('correct build record', () => {
      const mockParams = { name: 'denis', year: 2023 };

      expect(buildSearchParams(mockParams)).toEqual({
        name: 'denis',
        year: '2023',
      });
    });

    it('empty build record', () => {
      const mockParams = {
        allString: 'all',
        emptyString: '',
        null: null,
        undefined: undefined,
        zero: 0,
      };

      expect(buildSearchParams(mockParams)).toEqual({});
    });
  });

  describe('get-search-params', () => {
    it('get all properties', () => {
      locationSearch('?name=denis&age=29&position=developer');

      expect(getSearchParams()).toEqual({
        name: 'denis',
        age: 29,
        position: 'developer',
      });
    });

    it('exclude one property', () => {
      locationSearch('?name=denis&age=29&position=developer');

      expect(getSearchParams({ exclude: ['age'] })).toEqual({
        name: 'denis',
        position: 'developer',
      });
    });
  });
});
