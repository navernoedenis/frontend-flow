import type { AppState } from '@/app/providers/store';

export const selectProfileLoading = (state: AppState) => state.profile?.isLoading ?? false;
