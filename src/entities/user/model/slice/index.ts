import { createSlice } from '@reduxjs/toolkit';
import { Storage } from '@/shared/services';

import type { User, UserState } from '../types';
import { LS_USER_KEY } from '../constants';
import { httpSignIn } from '../../api/sign-in/sign-in';

export const initialState: UserState = {
  auth: null,
  error: '',
  isLoading: true,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    init: (state) => {
      state.auth = Storage.local.get<User>(LS_USER_KEY);
      state.isLoading = false;
    },
    logout: (state) => {
      state.auth = null;
      Storage.local.remove(LS_USER_KEY);
    },
    resetError: (state) => {
      state.error = '';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(httpSignIn.pending, (state) => {
        state.error = '';
        state.isLoading = true;
      })
      .addCase(httpSignIn.fulfilled, (state, action) => {
        state.auth = action.payload;
        state.isLoading = false;
        Storage.local.save(LS_USER_KEY, action.payload);
      })
      .addCase(httpSignIn.rejected, (state, action) => {
        state.error = action.payload as string;
        state.isLoading = false;
      });
  },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
