import { createAsyncThunk } from '@reduxjs/toolkit';
import { errorMessage } from 'shared/lib/error-message';

import type { ThunkConfig } from 'app/providers/store';
import type { Profile } from 'entities/profile';

export const updateProfile = createAsyncThunk<Profile, Profile, ThunkConfig>(
  'profile/update-profile',
  async (payload, config) => {
    const { extra, rejectWithValue } = config;

    try {
      const response = await extra.client.put<Profile>('/profile', payload);
      return response.data;
    } catch (error) {
      return rejectWithValue(errorMessage(error));
    }
  },
);
