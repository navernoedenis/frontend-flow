import type { Profile } from '@/entities/profile';
import { Country } from '@/entities/country';

export const profileMock: Profile = {
  id: '1',
  age: 62,
  avatar:
    'https://short-biography.com/wp-content/uploads/carl-sagan/Carl-Edward-Sagan.jpg',
  country: Country.USA,
  position: 'Scientist',
};
