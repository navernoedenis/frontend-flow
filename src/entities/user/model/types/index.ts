import type { Profile } from '@/entities/profile';

export type UserRole = 'root' | 'admin' | 'user';

export interface User {
  id: string;
  name: string;
  password: string;
  profile: Profile;
  profileId: string;
  roles: UserRole[];
}
