import type { Country } from 'entities/country';

export interface Profile {
  name: string;
  age: number;
  position: string;
  country: Country;
  avatar: string;
}
