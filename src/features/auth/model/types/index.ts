import type { User } from 'entities/user';

export type AuthForm = Pick<User, 'name' | 'password'>;

export interface AuthState {
  error: string;
  isLoading: boolean;
  me: User | null;
}
