import { createSlice } from '@reduxjs/toolkit';
import type { ProfileState } from '../types';
import { getProfile } from '../../api/get-profile/get-profile';

export const initialState: ProfileState = {
  isLoading: false,
  error: '',
  data: null,
};

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProfile.pending, (state) => {
        state.isLoading = true;
        state.error = '';
      })
      .addCase(getProfile.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(getProfile.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
  },
});

export const { reducer: profileReducer } = profileSlice;
