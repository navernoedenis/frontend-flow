import type { ProfileState } from '@/features/edit-profile/model/types';
import { profileMock } from '../../entities/profile';

export const profileStateMock: ProfileState = {
  data: profileMock,
  error: '',
  isLoading: false,
};
