import type { AppState } from '../../types';

export const selectAuthLogin = (state: AppState) => state.auth.isLoading;
