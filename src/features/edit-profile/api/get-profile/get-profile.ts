import { createAsyncThunk } from '@reduxjs/toolkit';

import type { ThunkConfig } from '@/app/providers/store';
import type { Profile } from '@/entities/profile';
import { errorMessage } from '@/shared/lib/transforms/error-message';

export const getProfile = createAsyncThunk<Profile, string, ThunkConfig>(
  'profile/get-profile',
  async (profileId, config) => {
    const { extra, rejectWithValue } = config;

    try {
      const response = await extra.client.get<Profile>(
        `/profiles/${profileId}`,
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(errorMessage(error));
    }
  },
);
