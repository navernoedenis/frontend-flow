import type { AppState } from 'app/providers/store';

export const selectCountertValue = (state: AppState) => state.counter?.value ?? 0;
