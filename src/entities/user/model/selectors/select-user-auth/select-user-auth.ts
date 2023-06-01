import type { AppState } from '@/app/providers/store';

export const selectUserAuth = (state: AppState) => state.user.auth;
