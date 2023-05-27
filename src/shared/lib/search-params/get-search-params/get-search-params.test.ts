import { locationSearch } from '@/shared/config/jest/mocks/dom';
import { getSearchParams } from './get-search-params';

describe('test shared/lib/search-params/get-search-params', () => {
  it('get search params', () => {
    locationSearch('?name=denis&age=29&position=developer');

    expect(getSearchParams()).toEqual({
      name: 'denis',
      age: 29,
      position: 'developer',
    });
  });

  it('get search params and exclude one', () => {
    locationSearch('?name=denis&age=29&position=developer');

    expect(getSearchParams({ exclude: ['age'] })).toEqual({
      name: 'denis',
      position: 'developer',
    });
  });
});
