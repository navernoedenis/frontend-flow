import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import type { AppState } from 'app/providers/store';
import type { Article } from 'entities/article';

import { ArticleView } from 'pages/articles/ui/articles-header/ui/select-article-view';

import { LS_ARTICLES_VIEW_KEY } from 'shared/constants/local-storage';
import { Storage } from 'shared/services';

import type { ArticleTag } from '../../ui/articles-header/ui/select-article-tag';
import type {
  ArticleSortKey,
  ArticleSortOrder,
} from '../../ui/articles-header/ui/select-article-sort';

import { getArticles } from '../../api/get-articles/get-articles';
import type { ArticlesState } from '../types';

const initialState: ArticlesState = {
  entities: {},
  error: '',
  hasMore: true,
  ids: [],
  isLoading: false,
  isMounted: false,
  shouldScrollToTop: false,
  sort: {
    key: 'createdAt',
    limit: 9,
    order: 'desc',
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
    setSortKey: (state, action: PayloadAction<ArticleSortKey>) => {
      state.sort.key = action.payload;
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
      state.shouldScrollToTop = true;
    },
    setSortTag: (state, action: PayloadAction<ArticleTag>) => {
      state.sort.tag = action.payload;
      state.shouldScrollToTop = true;

      if (state.isMounted) {
        state.sort.query = '';
      }
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
        state.isMounted = true;
        state.shouldScrollToTop = false;

        if (!isLastPage) {
          state.sort.page += 1;
        }

        articlesAdapter.addMany(state, action.payload);
      })
      .addCase(getArticles.rejected, (state, action) => {
        state.error = action.payload as string;
        state.isLoading = false;
        state.isMounted = true;
        state.shouldScrollToTop = false;
      });
  },
});

export const { actions: articlesActions } = articlesSlice;
export const { reducer: articlesReducer } = articlesSlice;

export const articlesSelectors = articlesAdapter.getSelectors<AppState>(
  (state) => state.articles ?? articlesAdapter.getInitialState(),
);
