import type { AppState } from '../../types';

export const selectAuthMe = (state: AppState) => state.auth.me;
