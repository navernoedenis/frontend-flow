import type { Profile } from 'entities/profile';
import type { Country } from 'entities/country';
import type { ValidateProfileError } from '../constants';

export interface ProfileState {
  isLoading: boolean;
  data: Profile | null;
  error: string;
}

export interface ProfileFormTextField {
  name: keyof Omit<Profile, 'country' | 'age'>;
  value: string;
}

export interface ProfileFormDigitField {
  name: keyof Pick<Profile, 'age'>;
  value: string;
}

export interface ProfileFormCountryField {
  name: keyof Pick<Profile, 'country'>;
  value: Country;
}

export type ErrorsRecord = Record<ValidateProfileError, string>;
