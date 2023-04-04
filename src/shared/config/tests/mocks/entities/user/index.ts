import type { User } from 'entities/user';
import { profileMock } from '../profile';

export const userMock: User = {
  id: '1',
  name: 'Carl Sagan',
  password: '12345',
  profileId: '1',
  profile: profileMock,
};
