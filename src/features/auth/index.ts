export { default as Auth } from './ui/auth/auth';
export { default as AuthModal } from './ui/auth-modal/auth-modal';

export { authActions, authReducer } from './model/slice';
export { selectAuthMe } from 'features/auth/model/selectors';

export type { AuthState } from './model/types';
