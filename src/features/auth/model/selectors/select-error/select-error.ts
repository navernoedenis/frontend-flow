import type { AppState } from '../../types';

export const selectAuthError = (state: AppState) => state.auth.error;
