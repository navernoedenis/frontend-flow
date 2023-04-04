import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';
import type { AppState } from 'app/providers/store';
import type { Article } from 'entities/article';

import type { ArticlesState } from '../types';
import { getArticles } from '../../api/get-articles/get-articles';

const initialState: ArticlesState = {
  entities: {},
  error: '',
  hasMore: true,
  ids: [],
  isLoading: false,
  limit: 9,
  page: 1,
};

const articlesAdapter = createEntityAdapter<Article>({
  selectId: (article) => article.id,
});

const articlesSlice = createSlice({
  name: 'articles',
  initialState: articlesAdapter.getInitialState(initialState),
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getArticles.pending, (state) => {
        state.isLoading = true;
        state.error = '';
      })
      .addCase(getArticles.fulfilled, (state, action) => {
        articlesAdapter.addMany(state, action.payload);
        state.error = '';
        state.hasMore = action.payload.length > 0;
        state.isLoading = false;
        state.page += 1;
      })
      .addCase(getArticles.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
  },
});

export const { actions: articlesActions } = articlesSlice;
export const { reducer: articlesReducer } = articlesSlice;

export const articlesSelectors = articlesAdapter.getSelectors<AppState>(
  (state) => state.articles ?? articlesAdapter.getInitialState(),
);
