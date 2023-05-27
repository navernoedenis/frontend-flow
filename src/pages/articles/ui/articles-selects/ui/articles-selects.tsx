import { useCallback } from 'react';
import type { ChangeEvent } from 'react';
import { useTranslation } from 'react-i18next';

import type { ArticleTag } from '@/features/article-select-tag';
import type { ArticleView } from '@/features/article-select-view';
import type {
  ArticleSortKey,
  ArticleSortOrder,
} from '@/features/article-select-sort';

import { ArticleSelectSort } from '@/features/article-select-sort';
import { ArticleSelectTag } from '@/features/article-select-tag';
import { ArticleSelectView } from '@/features/article-select-view';

import { LS_ARTICLES_VIRTUOSO_SCROLL_INDEX } from '@/shared/constants/local-storage';
import { classNames } from '@/shared/lib/transforms/class-names';
import { useAppDispatch, useAppSelector, useDebounce } from '@/shared/hooks';
import { Storage } from '@/shared/services';

import { Flexbox } from '@/shared/ui/flexbox';
import { TextField } from '@/shared/ui/text-field';

import { getArticles } from '../../../api/get-articles/get-articles';
import { articlesActions } from '../../../model/slice';
import {
  selectArticlesSortKey,
  selectArticlesSortOrder,
  selectArticlesSortQuery,
  selectArticlesSortTag,
  selectArticlesView,
} from '../../../model/selectors';

interface ArticlesSelectsProps {
  className?: string;
}

function ArticlesSelects({ className = '' }: ArticlesSelectsProps) {
  const { t } = useTranslation('translation', {
    keyPrefix: 'page.articles.selects',
  });

  const dispatch = useAppDispatch();

  const searchQuery = useAppSelector(selectArticlesSortQuery);
  const sortKey = useAppSelector(selectArticlesSortKey);
  const sortOrder = useAppSelector(selectArticlesSortOrder);
  const sortTag = useAppSelector(selectArticlesSortTag);
  const view = useAppSelector(selectArticlesView);

  const onGetArticles = useCallback(() => {
    dispatch(articlesActions.setSortPage(1));
    dispatch(articlesActions.setHasMore(true));
    dispatch(getArticles({ destroyPrevious: true }));
  }, [dispatch]);

  const onGetArticlesDebounced = useDebounce(onGetArticles, 500);

  const onSelectView = useCallback(
    (view: ArticleView) => {
      dispatch(articlesActions.setView(view));
    },
    [dispatch],
  );

  const onSelectSortKey = useCallback(
    (key: ArticleSortKey) => {
      dispatch(articlesActions.setSortKey(key));
      onGetArticles();
    },
    [dispatch, onGetArticles],
  );

  const onSelectSortOrder = useCallback(
    (order: ArticleSortOrder) => {
      dispatch(articlesActions.setSortOrder(order));
      onGetArticles();
    },
    [dispatch, onGetArticles],
  );

  const onSelectSortTag = useCallback(
    (tag: ArticleTag) => {
      dispatch(articlesActions.setSortTag(tag));
      onGetArticles();
    },
    [dispatch, onGetArticles],
  );

  const onSearchQuery = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      dispatch(articlesActions.setSortQuery(event.target.value));
      onGetArticlesDebounced();
      Storage.session.remove(LS_ARTICLES_VIRTUOSO_SCROLL_INDEX);
    },
    [dispatch, onGetArticlesDebounced],
  );

  const containerClassName = classNames('', {
    [className]: !!className,
  });

  return (
    <Flexbox
      alignItems="stretch"
      className={containerClassName}
      data-testid="articles-selects"
      direction="column"
      gap="20"
      tag="header"
    >
      <Flexbox justifyContent="between">
        <ArticleSelectView view={view} onSelectView={onSelectView} />
        <ArticleSelectSort
          sortKey={sortKey}
          sortOrder={sortOrder}
          onSelectKey={onSelectSortKey}
          onSelectOrder={onSelectSortOrder}
        />
      </Flexbox>

      <TextField
        onChange={onSearchQuery}
        placeholder={`${t('placeholder')}...`}
        title={t('title')}
        value={searchQuery}
      />
      <ArticleSelectTag tag={sortTag} onSelectTag={onSelectSortTag} />
    </Flexbox>
  );
}

export default ArticlesSelects;
