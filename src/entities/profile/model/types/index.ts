import type { Country } from 'shared/constants/country';

export interface Profile {
  name: string;
  age: number;
  position: string;
  country: Country;
  avatar: string;
}

export interface ProfileState {
  isLoading: boolean;
  error: string;
  data: Profile | null;
}
