import { createAsyncThunk } from '@reduxjs/toolkit';
import type { ThunkConfig } from '@/app/providers/store';
import type { User } from '@/entities/user';
import type { UserSignInForm } from '../../model/types';

import { errorMessage } from '@/shared/lib/error-message';

export const httpSignIn = createAsyncThunk<User, UserSignInForm, ThunkConfig>(
  'user/http-sign-in',
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
