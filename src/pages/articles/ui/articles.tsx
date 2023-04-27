import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import type { AppReducersLazy } from 'app/providers/store/types';
import { selectNetworkStatusOnline } from 'widgets/network-status';
import { ArticleView } from 'features/select-article-view';
import { ArticleList } from 'entities/article';

import { AppTypography } from 'shared/ui';
import { addSearchParams, buildSearchParams } from 'shared/lib/search-params';
import { LazyReducers } from 'shared/lib/components';

import {
  useAppDispatch,
  useAppSelector,
  useInfiniteScroll,
} from 'shared/hooks';

import { ArticlesHeader } from './articles-header';
import { getArticles } from '../api/get-articles/get-articles';
import { mountPage } from '../api/mount-page/mount-page';
import { articlesReducer, articlesSelectors } from '../model/slice';

import {
  selectArticlesHasMore,
  selectArticlesLoading,
  selectArticlesMounted,
  selectArticlesSortKey,
  selectArticlesSortLimit,
  selectArticlesSortOrder,
  selectArticlesSortQuery,
  selectArticlesSortTag,
  selectArticlesView,
} from '../model/selectors';

import classes from './articles.module.scss';

const reducers: AppReducersLazy = {
  articles: articlesReducer,
};

function ArticlesPage() {
  const { t } = useTranslation([
    'page.articles',
    'features.articles-view',
    'features.select-article-sort',
    'entities.article',
  ]);

  const dispatch = useAppDispatch();
  const isOnline = useAppSelector(selectNetworkStatusOnline);

  const articles = useAppSelector(articlesSelectors.selectAll);
  const hasMore = useAppSelector(selectArticlesHasMore);
  const isLoading = useAppSelector(selectArticlesLoading);
  const isMounted = useAppSelector(selectArticlesMounted);
  const view = useAppSelector(selectArticlesView);

  const _limit = useAppSelector(selectArticlesSortLimit);
  const _order = useAppSelector(selectArticlesSortOrder);
  const _sort = useAppSelector(selectArticlesSortKey);
  const q = useAppSelector(selectArticlesSortQuery);
  const tags = useAppSelector(selectArticlesSortTag);

  const isNoArticles = isMounted && !isLoading && !articles.length;
  const isTriggerMounted = !__IS_STORYBOOK__ && !isLoading && isOnline && hasMore;

  useEffect(() => {
    if (!isMounted) {
      dispatch(mountPage());
    }
  }, [isMounted, dispatch]);

  useEffect(() => {
    const params = buildSearchParams({ _limit, _order, _sort, q, tags });
    addSearchParams(params);
  }, [_limit, _order, _sort, q, tags]);

  const { triggerRef } = useInfiniteScroll({
    callback: () => {
      if (isTriggerMounted) {
        dispatch(getArticles());
      }
    },
  });

  return (
    <LazyReducers reducers={reducers} keepAfterUnmount>
      <div className={classes.container} data-testid="articles-page">
        <ArticlesHeader />
        <ArticleList
          articles={articles}
          isCompact={view === ArticleView.COMPACT}
          isLoading={isLoading}
        />

        {isNoArticles && (
          <AppTypography
            align="center"
            className={classes.noresult}
            uppercase
            weight="bold"
          >
            {`${t('no_articles')} :(`}
          </AppTypography>
        )}
      </div>

      {isTriggerMounted && (
        <div data-testid="articles-trigger" ref={triggerRef} />
      )}
    </LazyReducers>
  );
}

export default ArticlesPage;
