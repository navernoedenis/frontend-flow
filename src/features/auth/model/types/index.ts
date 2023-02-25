import type { TUser } from 'entities/user';

export type { AppState, AppPartialState } from 'app/providers/store/types';

export type AuthForm = Pick<TUser, 'name' | 'password'>;

export interface AuthState {
  error: string;
  isLoading: boolean;
  me: TUser | null;
}
