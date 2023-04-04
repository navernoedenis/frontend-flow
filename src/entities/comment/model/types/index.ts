import type { User } from 'entities/user';

export interface Comment {
  id: string;
  text: string;
  userId: string;
  user: User;
}
