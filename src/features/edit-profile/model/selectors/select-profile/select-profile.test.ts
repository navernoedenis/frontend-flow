import { selectProfile } from './select-profile';
import type { AppState } from 'app/providers/store';
import type { ProfileState } from '../../types';

import { profileMock } from 'shared/config/tests/mocks/entities';

describe('test entities/selectors/select-profile', () => {
  it('should return: null', () => {
    const state = {} as AppState;
    expect(selectProfile(state)).toBe(null);
  });

  it('should return: profile state with null data', () => {
    const profileState: ProfileState = {
      data: null,
      error: '',
      isLoading: false,
    };

    const state = { profile: profileState } as AppState;
    expect(selectProfile(state)).toEqual(profileState);
  });

  it('should return: profile state with data', () => {
    const profileState: ProfileState = {
      data: profileMock,
      error: '',
      isLoading: false,
    };

    const state = { profile: profileState } as AppState;
    expect(selectProfile(state)).toEqual(profileState);
  });
});
