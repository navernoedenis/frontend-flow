import { selectProfile } from './select-profile';
import type { AppState } from 'app/providers/store';
import type { Profile, ProfileState } from '../../types';

import { Country } from 'shared/constants/country';

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
    const profile: Profile = {
      age: 62,
      avatar: '',
      country: Country.USA,
      name: 'Carl Sagan',
      position: 'Developer',
    };

    const profileState: ProfileState = {
      data: profile,
      error: '',
      isLoading: false,
    };

    const state = { profile: profileState } as AppState;
    expect(selectProfile(state)).toEqual(profileState);
  });
});
