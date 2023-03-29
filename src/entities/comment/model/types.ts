import type { User } from 'entities/user';

export interface Comment {
  user: User;
  id: string;
  text: string;
}
