import { createSlice } from '@reduxjs/toolkit';

import { LocalStorage } from 'shared/services/local-storage';
import { LS_AUTH_KEY } from 'shared/constants/local-storage';

import type { User } from 'entities/user';
import type { AuthState } from '../types';

import { signIn } from '../../api/sign-in/sign-in';

export const initialState: AuthState = {
  isLoading: true,
  error: '',
  me: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    init: (state) => {
      state.me = LocalStorage.get<User>(LS_AUTH_KEY);
      state.isLoading = false;
    },
    logout: (state) => {
      state.me = null;
      LocalStorage.remove(LS_AUTH_KEY);
    },
    resetError: (state) => {
      state.error = '';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signIn.pending, (state) => {
        state.isLoading = true;
        state.error = '';
      })
      .addCase(signIn.fulfilled, (state, action) => {
        state.isLoading = false;
        state.me = action.payload;
        LocalStorage.save(LS_AUTH_KEY, action.payload);
      })
      .addCase(signIn.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
  },
});

export const { actions: authActions } = authSlice;
export const { reducer: authReducer } = authSlice;
