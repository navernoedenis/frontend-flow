import type { AppState } from 'app/providers/store';

export const selectNetworkStatusOnline = (state: AppState) => state.networkStatus.isOnline;
