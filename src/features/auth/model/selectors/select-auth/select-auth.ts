import type { AppState } from 'app/providers/store';

export const selectAuth = (state: AppState) => state.auth;
