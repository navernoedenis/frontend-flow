import type { AppState } from '../../types';

export const selectCountertValue = (state: AppState) => state.counter.value;
