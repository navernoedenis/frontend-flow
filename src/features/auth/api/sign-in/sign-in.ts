import { createAsyncThunk } from '@reduxjs/toolkit';
import { errorMessage } from 'shared/lib/error-message';

import type { ThunkConfig } from 'app/providers/store';
import type { User } from 'entities/user';
import type { AuthForm } from '../../model/types';

export const signIn = createAsyncThunk<User, AuthForm, ThunkConfig>(
  'auth/sign-in',
  async (form, config) => {
    const { extra, rejectWithValue } = config;

    try {
      const response = await extra.client.post<User>('/sign-in', form);
      return response.data;
    } catch (error) {
      return rejectWithValue(errorMessage(error));
    }
  },
);