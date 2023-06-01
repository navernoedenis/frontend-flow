import type { Profile } from '@/entities/profile';

export interface UserState {
  auth: User | null;
  error: string;
  isLoading: boolean;
}

export interface User {
  id: string;
  name: string;
  password: string;
  profile: Profile;
  profileId: string;
  roles: UserRole[];
}

export type UserRole = 'root' | 'admin' | 'user';

export type UserSignInForm = Pick<User, 'name' | 'password'>;
