import { createAsyncThunk } from '@reduxjs/toolkit';
import type { ThunkConfig } from 'app/providers/store';

import { getArticles } from '../get-articles/get-articles';
import {
  selectArticlesHasMore,
  selectArticlesLoading,
} from '../../model/selectors';

export const getArticlesNext = createAsyncThunk<
  undefined,
  undefined,
  ThunkConfig
>('articles/get-articles-next', (_, config) => {
  const { getState, dispatch } = config;

  const hasMore = selectArticlesHasMore(getState());
  const isLoading = selectArticlesLoading(getState());

  if (hasMore && !isLoading) {
    dispatch(getArticles());
  }

  return undefined;
});
