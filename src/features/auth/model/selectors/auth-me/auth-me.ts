import type { AppState } from '@/app/providers/store';

export const selectAuthMe = (state: AppState) => state.auth.me;
