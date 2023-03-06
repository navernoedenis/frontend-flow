import { selectAuth } from './select-auth';
import { AppState } from 'app/providers/store';
import type { User } from 'entities/user';

const user: User = {
  id: 1,
  name: 'test',
  password: '12345',
};

describe('test auth/select-auth', () => {
  it('should return: default value', () => {
    const state = {
      auth: { error: '', isLoading: false, me: null },
    } as AppState;

    expect(selectAuth(state)).toEqual(state.auth);
  });

  it('should return: state with auth data', () => {
    const state = {
      auth: { error: '', isLoading: false, me: user },
    } as AppState;

    expect(selectAuth(state)).toEqual(state.auth);
  });
});
