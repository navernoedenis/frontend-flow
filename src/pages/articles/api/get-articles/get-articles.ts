import { createAsyncThunk } from '@reduxjs/toolkit';
import { errorMessage } from 'shared/lib/error-message';

import type { Article } from 'entities/article';
import type { ThunkConfig } from 'app/providers/store';

import { selectArticlesPage, selectArticlesLimit } from '../../model/selectors';

export const getArticles = createAsyncThunk<Article[], undefined, ThunkConfig>(
  'articles/get-articles',
  async (_, config) => {
    const { extra, rejectWithValue, getState } = config;

    const page = selectArticlesPage(getState());
    const limit = selectArticlesLimit(getState());

    try {
      const response = await extra.client.get<Article[]>('/articles', {
        params: {
          _page: page,
          _limit: limit,
        },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(errorMessage(error));
    }
  },
);
