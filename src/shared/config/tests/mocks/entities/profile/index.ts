import { Country } from 'entities/country';
import type { Profile } from 'entities/profile';

export const profileMock: Profile = {
  age: 62,
  avatar:
    'https://short-biography.com/wp-content/uploads/carl-sagan/Carl-Edward-Sagan.jpg',
  country: Country.USA,
  name: 'Carl Sagan',
  position: 'Developer',
};
