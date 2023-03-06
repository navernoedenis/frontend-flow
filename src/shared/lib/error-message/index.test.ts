import { errorMessage } from './';

describe('test shared/lib/error-message', () => {
  it('default error', () => {
    const error = new Error('default error');
    expect(errorMessage(error)).toBe('default error');
  });

  it('unknown error', () => {
    expect(errorMessage('')).toBe('Unexpected error');
  });
});
