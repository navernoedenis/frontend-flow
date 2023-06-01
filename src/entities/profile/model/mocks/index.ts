import { Country } from '@/entities/country';
import type { Profile } from '../types';

export const profileMock: Profile = {
  id: '1',
  age: 62,
  avatar:
    'https://short-biography.com/wp-content/uploads/carl-sagan/Carl-Edward-Sagan.jpg',
  country: Country.USA,
  position: 'Scientist',
};
