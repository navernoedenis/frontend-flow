import type { AppState } from '../../types';

export const selectCounter = (state: AppState) => state.counter;
