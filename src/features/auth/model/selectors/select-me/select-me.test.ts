import { selectAuthMe } from './select-me';
import { AppState, AppPartialState } from '../../types';

describe('test auth/select-auth', () => {
  it('should return default value', () => {
    const state: AppPartialState = {
      auth: { me: null },
    };

    expect(selectAuthMe(state as AppState)).toBe(null);
  });
});
