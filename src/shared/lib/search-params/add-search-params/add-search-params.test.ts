import { addSearchParams } from './add-search-params';

describe('test shared/lib/search-params/add-search-params', () => {
  it('params must be added to location.href', () => {
    addSearchParams({ name: 'denis', position: 'developer' });
    expect(window.location.href).toContain('?name=denis&position=developer');
  });
});
