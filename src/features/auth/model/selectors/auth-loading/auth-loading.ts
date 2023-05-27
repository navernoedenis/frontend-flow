import type { AppState } from '@/app/providers/store';

export const selectAuthLoading = (state: AppState) => state.auth.isLoading;
