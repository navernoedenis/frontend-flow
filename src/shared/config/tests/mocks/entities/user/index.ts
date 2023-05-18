import type { User } from 'entities/user';
import { profileMock } from '../profile';

export const userMock: User = {
  id: '15',
  name: 'Carl Sagan',
  password: '12345',
  profileId: '15',
  profile: profileMock,
  roles: ['user'],
};

export const adminMock: User = {
  ...userMock,
  id: '1',
  roles: ['admin', 'user'],
};
