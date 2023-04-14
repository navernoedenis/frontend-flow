import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import type { AppReducersLazy } from 'app/providers/store/types';

import { addSearchParams, buildSearchParams } from 'shared/lib/search-params';
import { LazyReducers } from 'shared/lib/components';
import { useAppSelector } from 'shared/hooks';

import { ArticlesCards } from './articles-cards';
import { ArticlesHeader } from './articles-header';
import { ArticlesInfiniteScroll } from './articles-infinite-scroll';

import { articlesReducer } from '../model/slice';
import {
  selectArticlesMounted,
  selectArticlesSortKey,
  selectArticlesSortLimit,
  selectArticlesSortOrder,
  selectArticlesSortQuery,
  selectArticlesSortTag,
} from '../model/selectors';

const reducers: AppReducersLazy = {
  articles: articlesReducer,
};

function ArticlesPage() {
  useTranslation([
    'page.articles',
    'features.articles-view',
    'features.select-article-sort',
    'entities.article',
  ]);

  const _limit = useAppSelector(selectArticlesSortLimit);
  const _order = useAppSelector(selectArticlesSortOrder);
  const _sort = useAppSelector(selectArticlesSortKey);
  const isMounted = useAppSelector(selectArticlesMounted);
  const q = useAppSelector(selectArticlesSortQuery);
  const tags = useAppSelector(selectArticlesSortTag);

  useEffect(() => {
    if (isMounted) {
      const params = buildSearchParams({ _limit, _order, _sort, q, tags });
      addSearchParams(params);
    }
  }, [isMounted, _limit, _order, _sort, q, tags]);

  return (
    <LazyReducers reducers={reducers} keepAfterUnmount>
      <div data-testid="articles-page">
        <ArticlesHeader />
        <ArticlesCards />
        {!__IS_STORYBOOK__ && <ArticlesInfiniteScroll />}
      </div>
    </LazyReducers>
  );
}

export default ArticlesPage;
