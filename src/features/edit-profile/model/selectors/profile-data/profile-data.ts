import type { AppState } from 'app/providers/store';

export const selectProfileData = (state: AppState) => state.profile?.data ?? null;
