import { profileMock } from 'shared/config/tests/mocks/entities';
import type { Profile } from 'entities/profile';

import { deepCopy } from 'shared/lib/deep-copy';
import { Country } from 'entities/country';

import { validateProfile } from './validate-profile';
import { ValidateProfileError } from '../../constants';

describe('test feature/edit-profile/validate-profile', () => {
  it('should have no any errors', () => {
    expect(validateProfile(profileMock)).toEqual([]);
  });

  it('should return empty and invalid url address', () => {
    const customMock = deepCopy(profileMock);
    customMock.avatar = '';

    expect(validateProfile(customMock)).toEqual([
      ValidateProfileError.AVATAR_EMPTY,
      ValidateProfileError.AVATAR_INVALID_URL,
    ]);
  });

  it('should return invalid url address', () => {
    const customMock = deepCopy(profileMock);
    customMock.avatar = '4f34fg34gsfg';

    expect(validateProfile(customMock)).toEqual([
      ValidateProfileError.AVATAR_INVALID_URL,
    ]);
  });

  it('should return invalid age property and age less 17 errors', () => {
    const customMock = deepCopy(profileMock);
    customMock.age = 0;

    expect(validateProfile(customMock)).toEqual([
      ValidateProfileError.AGE_EMPTY,
      ValidateProfileError.AGE_RANGE_LESS,
    ]);
  });

  it('should return all errors', () => {
    const customMock: Profile = {
      age: 0,
      avatar: '',
      country: Country.CANADA,
      name: '',
      position: '',
    };

    expect(validateProfile(customMock)).toEqual([
      ValidateProfileError.AGE_EMPTY,
      ValidateProfileError.AGE_RANGE_LESS,
      ValidateProfileError.AVATAR_EMPTY,
      ValidateProfileError.AVATAR_INVALID_URL,
      ValidateProfileError.NAME_EMPTY,
      ValidateProfileError.NAME_RANGE,
      ValidateProfileError.POSITION_EMPTY,
      ValidateProfileError.POSITION_RANGE_LESS,
    ]);
  });
});
