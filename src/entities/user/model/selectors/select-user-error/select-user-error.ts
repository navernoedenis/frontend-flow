import type { AppState } from '@/app/providers/store';

export const selectUserError = (state: AppState) => state.user.error;
