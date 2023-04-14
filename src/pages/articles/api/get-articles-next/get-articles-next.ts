import { createAsyncThunk } from '@reduxjs/toolkit';
import type { ThunkConfig } from 'app/providers/store';

import type { ArticleTag } from 'features/select-article-tag';
import type {
  ArticleSortKey,
  ArticleSortOrder,
} from 'features/select-article-sort';

import { getSearchParams } from 'shared/lib/search-params';

import { getArticles } from '../get-articles/get-articles';
import { articlesActions } from '../../model/slice';
import {
  selectArticlesHasMore,
  selectArticlesLoading,
  selectArticlesMounted,
} from '../../model/selectors';

export const getArticlesNext = createAsyncThunk<
  undefined,
  undefined,
  ThunkConfig
>('articles/get-articles-next', (_, config) => {
  const { getState, dispatch } = config;

  const hasMore = selectArticlesHasMore(getState());
  const isLoading = selectArticlesLoading(getState());
  const isMounted = selectArticlesMounted(getState());

  if (!isMounted) {
    const { _limit, _order, _sort, q, tags } = getSearchParams();

    if (_limit && typeof _limit === 'number') {
      dispatch(articlesActions.setSortLimit(_limit));
    }

    if (_order) {
      dispatch(articlesActions.setSortOrder(_order as ArticleSortOrder));
    }

    if (_sort) {
      dispatch(articlesActions.setSortKey(_sort as ArticleSortKey));
    }

    if (q && typeof q === 'string') {
      dispatch(articlesActions.setSortQuery(q));
    }

    if (tags) {
      dispatch(articlesActions.setSortTag(tags as ArticleTag));
    }

    dispatch(articlesActions.setMounted(true));
  }

  if (hasMore && !isLoading) {
    dispatch(getArticles());
  }

  return undefined;
});
