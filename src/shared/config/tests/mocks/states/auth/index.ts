import type { AuthState } from 'features/auth';
import { profileMock } from '../../entities/profile';

export const authStateMock: AuthState = {
  error: '',
  isLoading: false,
  me: {
    id: '1',
    name: 'Carl',
    password: '12345',
    profile: profileMock,
    profileId: '1',
  },
};
