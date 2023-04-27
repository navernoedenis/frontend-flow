import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import type { AppState } from 'app/providers/store';
import type { Article } from 'entities/article';
import type { ArticleTag } from 'features/select-article-tag';
import type {
  ArticleSortKey,
  ArticleSortOrder,
} from 'features/select-article-sort';

import { ArticleView } from 'features/select-article-view';

import { LS_ARTICLES_VIEW_KEY } from 'shared/constants/local-storage';
import { Storage } from 'shared/services';

import { getArticles } from '../../api/get-articles/get-articles';
import type { ArticlesState } from '../types';

const initialState: ArticlesState = {
  entities: {},
  error: '',
  hasMore: false,
  ids: [],
  isLoading: false,
  isMounted: false,
  sort: {
    key: 'all',
    limit: 9,
    order: 'asc',
    page: 1,
    query: '',
    tag: 'all',
  },
  view: Storage.local.get(LS_ARTICLES_VIEW_KEY) ?? ArticleView.NORMAL,
};

const articlesAdapter = createEntityAdapter<Article>({
  selectId: (article) => article.id,
});

const articlesSlice = createSlice({
  name: 'articles',
  initialState: articlesAdapter.getInitialState(initialState),
  reducers: {
    setHasMore: (state, action: PayloadAction<boolean>) => {
      state.hasMore = action.payload;
    },
    setMounted: (state, action: PayloadAction<boolean>) => {
      state.isMounted = action.payload;
    },
    setSortKey: (state, action: PayloadAction<ArticleSortKey>) => {
      state.sort.key = action.payload;

      if (action.payload === 'all') {
        state.sort.order = 'asc';
      }
    },
    setSortOrder: (state, action: PayloadAction<ArticleSortOrder>) => {
      state.sort.order = action.payload;
    },
    setSortLimit: (state, action: PayloadAction<number>) => {
      state.sort.limit = action.payload;
    },
    setSortPage: (state, action: PayloadAction<number>) => {
      state.sort.page = action.payload;
    },
    setSortQuery: (state, action: PayloadAction<string>) => {
      state.sort.query = action.payload;
    },
    setSortTag: (state, action: PayloadAction<ArticleTag>) => {
      state.sort.tag = action.payload;
    },
    setView: (state, action: PayloadAction<ArticleView>) => {
      state.view = action.payload;
      Storage.local.save(LS_ARTICLES_VIEW_KEY, action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getArticles.pending, (state, action) => {
        state.error = '';
        state.isLoading = true;

        if (action.meta.arg?.destroyPrevious) {
          articlesAdapter.removeAll(state);
        }
      })
      .addCase(getArticles.fulfilled, (state, action) => {
        const isLastPage = action.payload.length !== state.sort.limit;
        state.error = '';
        state.hasMore = !isLastPage;
        state.isLoading = false;

        if (!isLastPage) {
          state.sort.page += 1;
        }

        articlesAdapter.addMany(state, action.payload);
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
