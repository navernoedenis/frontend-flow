import { profileMock } from '@/entities/profile';
import type { User, UserState } from '../types';

export const userMock: User = {
  id: '1',
  name: 'Carl Sagan',
  password: '12345',
  profileId: '1',
  profile: profileMock,
  roles: ['user'],
};

export const adminUserMock: User = {
  ...userMock,
  id: '0',
  roles: ['admin', 'user'],
};

export const userStateMock: UserState = {
  auth: {
    ...userMock,
    roles: ['root', 'admin', 'user'],
  },
  error: '',
  isLoading: false,
};
