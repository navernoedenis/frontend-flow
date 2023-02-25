import { selectAuth } from './select-auth';
import { AppState, AppPartialState } from '../../types';

describe('test auth/select-auth', () => {
  it('should return default value', () => {
    const state: AppPartialState = {
      auth: { error: '', isLoading: false, me: null },
    };

    expect(selectAuth(state as AppState)).toEqual({
      error: '',
      isLoading: false,
      me: null,
    });
  });
});
