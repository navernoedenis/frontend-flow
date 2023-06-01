import type { AppState } from '@/app/providers/store';

export const selectUserLoading = (state: AppState) => state.user.isLoading;
