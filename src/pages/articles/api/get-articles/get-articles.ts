import { createAsyncThunk } from '@reduxjs/toolkit';
import type { Article } from 'entities/article';
import type { ThunkConfig } from 'app/providers/store';

import { addSearchParams, buildSearchParams } from 'shared/lib/search-params';
import { errorMessage } from 'shared/lib/transforms/error-message';

import {
  selectArticlesSortKey,
  selectArticlesSortLimit,
  selectArticlesSortOrder,
  selectArticlesSortPage,
  selectArticlesSortQuery,
  selectArticlesSortTag,
} from '../../model/selectors';

interface GetArticlesProps {
  destroyPrevious?: boolean;
}

export const getArticles = createAsyncThunk<
  Article[],
  GetArticlesProps | undefined,
  ThunkConfig
>('articles/get-articles', async (_, config) => {
  const { extra, rejectWithValue, getState } = config;

  const _limit = selectArticlesSortLimit(getState());
  const _order = selectArticlesSortOrder(getState());
  const _page = selectArticlesSortPage(getState());
  const _sort = selectArticlesSortKey(getState());
  const q = selectArticlesSortQuery(getState());
  const tags = selectArticlesSortTag(getState());

  const params = buildSearchParams({
    _limit,
    _order,
    _sort,
    q,
    tags,
  });

  addSearchParams(params);

  try {
    const response = await extra.client.get<Article[]>('/articles', {
      params: { ...params, _page },
    });

    return response.data;
  } catch (error) {
    return rejectWithValue(errorMessage(error));
  }
});
