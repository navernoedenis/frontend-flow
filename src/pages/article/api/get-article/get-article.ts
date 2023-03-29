import { createAsyncThunk } from '@reduxjs/toolkit';

import type { ThunkConfig } from 'app/providers/store';
import type { Article } from 'entities/article';

import { errorMessage } from 'shared/lib/error-message';

export const getArticle = createAsyncThunk<Article, string, ThunkConfig>(
  'article/get-article',
  async (id, config) => {
    const { extra, rejectWithValue } = config;

    try {
      const response = await extra.client.get<Article>(`/articles/${id}`);

      if (!response.data) {
        throw new Error('Article not found');
      }

      return response.data;
    } catch (error) {
      return rejectWithValue(errorMessage(error));
    }
  },
);
