import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import type { ChangeEvent } from 'react';

import type {
  ArticleSortKey,
  ArticleSortOrder,
} from 'features/select-article-sort';

import type { ArticleView } from 'features/select-article-view';
import type { ArticleTag } from 'features/select-article-tag';

import { SelectArticleSort } from 'features/select-article-sort';
import { SelectArticleTag } from 'features/select-article-tag';
import { SelectArticleView } from 'features/select-article-view';

import { classNames } from 'shared/lib/transforms/class-names';
import { Flexbox, TextField } from 'shared/ui';
import { useAppDispatch, useAppSelector, useDebounce } from 'shared/hooks';

import { getArticles } from '../../../api/get-articles/get-articles';
import { articlesActions } from '../../../model/slice';
import {
  selectArticlesSortKey,
  selectArticlesSortOrder,
  selectArticlesSortQuery,
  selectArticlesSortTag,
  selectArticlesView,
} from '../../../model/selectors';

import classes from './articles-header.module.scss';

interface ArticlesHeaderProps {
  className?: string;
}

function ArticlesHeader({ className = '' }: ArticlesHeaderProps) {
  const { t } = useTranslation('page.articles', { keyPrefix: 'header' });
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
    },
    [dispatch, onGetArticlesDebounced],
  );

  const containerClassName = classNames(classes.container, {
    [className]: !!className,
  });

  return (
    <Flexbox
      alignItems="stretch"
      className={containerClassName}
      data-testid="articles-header"
      direction="column"
      gap="20"
      tag="header"
    >
      <Flexbox justifyContent="between">
        <SelectArticleView currentView={view} onSelectView={onSelectView} />
        <SelectArticleSort
          currentSortKey={sortKey}
          currentSortOrder={sortOrder}
          onSelectKey={onSelectSortKey}
          onSelectOrder={onSelectSortOrder}
        />
      </Flexbox>

      <TextField
        onChange={onSearchQuery}
        placeholder={`${t('search.placeholder')}...`}
        title={t('search.title')}
        value={searchQuery}
      />
      <SelectArticleTag currentTag={sortTag} onSelect={onSelectSortTag} />
    </Flexbox>
  );
}

export default ArticlesHeader;
