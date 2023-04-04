import type { Profile } from 'entities/profile';
import { ValidateProfileError } from '../../constants';

export function validateProfile(profile: Profile) {
  const errors: ValidateProfileError[] = [];

  if (!profile.age) {
    errors.push(ValidateProfileError.AGE_EMPTY);
  }

  if (profile.age < 18) {
    errors.push(ValidateProfileError.AGE_RANGE_LESS);
  }

  if (!profile.avatar) {
    errors.push(ValidateProfileError.AVATAR_EMPTY);
  }

  if (!isUrlValid(profile.avatar)) {
    errors.push(ValidateProfileError.AVATAR_INVALID_URL);
  }

  if (!profile.position) {
    errors.push(ValidateProfileError.POSITION_EMPTY);
  }

  if (profile.position.length < 3) {
    errors.push(ValidateProfileError.POSITION_RANGE_LESS);
  }

  return errors;
}

function isUrlValid(url: string) {
  // https://stackoverflow.com/questions/5717093/check-if-a-javascript-string-is-a-url
  const pattern = new RegExp(
    '^(https?:\\/\\/)?'
      + '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'
      + '((\\d{1,3}\\.){3}\\d{1,3}))'
      + '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'
      + '(\\?[;&a-z\\d%_.~+=-]*)?'
      + '(\\#[-a-z\\d_]*)?$',
    'i',
  );
  return !!pattern.test(url);
}
