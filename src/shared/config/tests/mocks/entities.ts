import { Country } from 'entities/country';
import type { Profile } from 'entities/profile';
import type { User } from 'entities/user';

export const profileMock: Profile = {
  age: 62,
  avatar:
    'https://short-biography.com/wp-content/uploads/carl-sagan/Carl-Edward-Sagan.jpg',
  country: Country.USA,
  name: 'Carl Sagan',
  position: 'Developer',
};

export const userMock: User = {
  id: 1,
  name: 'test',
  password: '12345',
};
