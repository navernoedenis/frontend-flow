import { selectAuthLogin } from './select-loading';
import { AppState, AppPartialState } from '../../types';

describe('test auth/select-auth', () => {
  it('should return default value', () => {
    const state: AppPartialState = { auth: { isLoading: false } };

    expect(selectAuthLogin(state as AppState)).toBe(false);
  });
});
