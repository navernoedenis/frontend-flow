import { createAsyncThunk } from '@reduxjs/toolkit';

import type { ThunkConfig } from '@/app/providers/store';
import type { Profile } from '@/entities/profile';
import { errorMessage } from '@/shared/lib/transforms/error-message';

export const updateProfile = createAsyncThunk<Profile, Profile, ThunkConfig>(
  'profile/update-profile',
  async (profile, config) => {
    const { extra, rejectWithValue } = config;

    try {
      const response = await extra.client.put<Profile>(
        `/profiles/${profile.id}`,
        profile,
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(errorMessage(error));
    }
  },
);
