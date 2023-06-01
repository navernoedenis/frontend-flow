import { createAsyncThunk } from '@reduxjs/toolkit';

import type { ThunkConfig } from '@/app/providers/store';
import type { Comment } from '@/entities/comment';

import { errorMessage } from '@/shared/lib/error-message';

export const getComments = createAsyncThunk<Comment[], string, ThunkConfig>(
  'article/get-comments',
  async (articleId, config) => {
    const { extra, rejectWithValue } = config;

    try {
      const response = await extra.client.get<Comment[]>('/comments', {
        params: {
          articleId,
          _expand: 'user',
        },
      });

      if (!response.data) {
        throw new Error('Comments not found');
      }

      return response.data;
    } catch (error) {
      return rejectWithValue(errorMessage(error));
    }
  },
);
