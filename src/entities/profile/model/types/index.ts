import type { Country } from 'entities/country';

export interface Profile {
  id: string;
  avatar: string;
  age: number;
  position: string;
  country: Country;
}
