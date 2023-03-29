import type { Country } from 'entities/country';

export interface Profile {
  avatar: string;
  name: string;
  age: number;
  position: string;
  country: Country;
}
