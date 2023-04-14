import type { AppState } from 'app/providers/store';

export type PageScrollState = Partial<Record<PageScrollKey, number>>;
export type PageScrollKey = keyof AppState;
