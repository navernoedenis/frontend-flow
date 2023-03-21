import type { AppState } from 'app/providers/store';

export const selectProfile = (state: AppState) => state.profile ?? null;
