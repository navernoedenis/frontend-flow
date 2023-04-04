export { default as Auth } from './ui/auth/auth.lazy';
export { default as AuthModal } from './ui/auth-modal/auth-modal';

export { authActions, authReducer } from './model/slice';
export { selectAuthMe, selectAuthLoading } from 'features/auth/model/selectors';

export type { AuthState } from './model/types';
