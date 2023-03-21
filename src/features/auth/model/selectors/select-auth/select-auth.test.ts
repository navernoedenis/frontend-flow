import { selectAuth } from './select-auth';
import { AppState } from 'app/providers/store';
import { userMock } from 'shared/config/tests/mocks/entities';

describe('test auth/select-auth', () => {
  it('should return: default value', () => {
    const state = {
      auth: { error: '', isLoading: false, me: null },
    } as AppState;

    expect(selectAuth(state)).toEqual(state.auth);
  });

  it('should return: state with auth data', () => {
    const state = {
      auth: { error: '', isLoading: false, me: userMock },
    } as AppState;

    expect(selectAuth(state)).toEqual(state.auth);
  });
});
