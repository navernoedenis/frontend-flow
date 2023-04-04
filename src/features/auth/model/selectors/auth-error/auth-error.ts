import type { AppState } from 'app/providers/store';

export const selectAuthError = (state: AppState) => state.auth.error;
