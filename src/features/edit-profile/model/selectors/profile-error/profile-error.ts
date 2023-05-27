import type { AppState } from '@/app/providers/store';

export const selectProfileError = (state: AppState) => state.profile?.error ?? '';
