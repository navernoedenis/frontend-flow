import { buildSearchParams } from './build-search-params';

describe('test shared/lib/search-params/build-search-params', () => {
  it('get record', () => {
    const mockParams = { name: 'denis', year: 2023 };

    expect(buildSearchParams(mockParams)).toEqual({
      name: 'denis',
      year: '2023',
    });
  });

  it('get empty record', () => {
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
