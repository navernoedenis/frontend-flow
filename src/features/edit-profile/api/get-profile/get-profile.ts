import { createAsyncThunk } from '@reduxjs/toolkit';
import { errorMessage } from 'shared/lib/error-message';

import type { ThunkConfig } from 'app/providers/store';
import type { Profile } from 'entities/profile';

export const getProfile = createAsyncThunk<Profile, undefined, ThunkConfig>(
  'profile/get-profile',
  async (_, config) => {
    const { extra, rejectWithValue } = config;

    try {
      const response = await extra.client.get<Profile>('/profile');
      return response.data;
    } catch (error) {
      return rejectWithValue(errorMessage(error));
    }
  },
);
