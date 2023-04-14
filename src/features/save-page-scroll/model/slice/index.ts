import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { PageScrollState, PageScrollKey } from '../types';

export const initialState: PageScrollState = {};

export const pageScrollSlice = createSlice({
  name: 'page-scroll',
  initialState,
  reducers: {
    add: (
      state,
      action: PayloadAction<{ page: PageScrollKey; position: number }>,
    ) => {
      const { page, position } = action.payload;
      state[page] = position;
    },
    delete: (state, action: PayloadAction<{ page: PageScrollKey }>) => {
      const { page } = action.payload;
      delete state[page];
    },
  },
});

export const { actions: pageScrollActions } = pageScrollSlice;
export const { reducer: pageScrollReducer } = pageScrollSlice;
