import { createAsyncThunk } from '@reduxjs/toolkit';
import type { ThunkConfig } from 'app/providers/store';

import { getSearchParams } from 'shared/lib/search-params';
import type { ArticleTag } from '../../ui/articles-header/ui/select-article-tag';
import type {
  ArticleSortKey,
  ArticleSortOrder,
} from '../../ui/articles-header/ui/select-article-sort';

import { getArticles } from '../get-articles/get-articles';
import { articlesActions } from '../../model/slice';

export const onMountPage = createAsyncThunk<undefined, undefined, ThunkConfig>(
  'articles/mount-page',
  (_, config) => {
    const { dispatch } = config;
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

    if (!__IS_STORYBOOK__) {
      dispatch(getArticles());
    }

    return undefined;
  },
);
