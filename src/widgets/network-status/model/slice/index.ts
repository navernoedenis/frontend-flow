import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { NetworkStatusState } from '../types';

export const initialState: NetworkStatusState = {
  isOnline: window.navigator.onLine,
};

const networkStatusSlice = createSlice({
  name: 'network-status',
  initialState,
  reducers: {
    setStatus: (state, action: PayloadAction<boolean>) => {
      state.isOnline = action.payload;
    },
  },
});

export const { actions: networkStatusActions } = networkStatusSlice;
export const { reducer: networkStatusReducer } = networkStatusSlice;
