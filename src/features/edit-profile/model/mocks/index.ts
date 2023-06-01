import { profileMock } from '@/entities/profile';
import type { ProfileState } from '../types';

export const profileStateMock: ProfileState = {
  data: profileMock,
  error: '',
  isLoading: false,
};
