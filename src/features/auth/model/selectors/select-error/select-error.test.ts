import { selectAuthError } from './select-error';
import { AppState, AppPartialState } from '../../types';

describe('test auth/select-auth-error', () => {
  it('should return default value', () => {
    const state: AppPartialState = { auth: { error: '' } };

    expect(selectAuthError(state as AppState)).toBe('');
  });
});
