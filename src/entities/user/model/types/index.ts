import type { Profile } from 'entities/profile';

export interface User {
  id: string;
  name: string;
  password: string;
  profile: Profile;
  profileId: string;
}
