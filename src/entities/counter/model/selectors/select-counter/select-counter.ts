import type { AppState } from 'app/providers/store';

export const selectCounter = (state: AppState) => state.counter ?? null;
