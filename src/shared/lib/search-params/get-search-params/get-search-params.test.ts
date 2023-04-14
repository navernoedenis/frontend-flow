import { mockLocationSearch } from 'shared/config/tests/mocks/dom';
import { getSearchParams } from './get-search-params';

describe('test shared/lib/search-params/get-search-params', () => {
  it('get search params', () => {
    mockLocationSearch('?name=denis&age=29&position=developer');

    expect(getSearchParams()).toEqual({
      name: 'denis',
      age: 29,
      position: 'developer',
    });
  });

  it('get search params and exclude one', () => {
    mockLocationSearch('?name=denis&age=29&position=developer');

    expect(getSearchParams({ exclude: ['age'] })).toEqual({
      name: 'denis',
      position: 'developer',
    });
  });
});
