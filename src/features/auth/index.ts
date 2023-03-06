export { default as Auth } from './ui/auth/auth.lazy';
export { default as AuthModal } from './ui/auth-modal/auth-modal';

export { authActions, authReducer } from './model/slice';
export { selectAuth } from 'features/auth/model/selectors/select-auth/select-auth';

export type { AuthState } from './model/types';
