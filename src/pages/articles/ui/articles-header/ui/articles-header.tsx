import { useCallback } from 'react';
import type { ChangeEvent } from 'react';
import { useTranslation } from 'react-i18next';

import { LS_ARTICLES_VIRTUOSO_SCROLL_INDEX } from 'shared/constants/local-storage';
import { classNames } from 'shared/lib/transforms/class-names';
import { useAppDispatch, useAppSelector, useDebounce } from 'shared/hooks';
import { Storage } from 'shared/services';

import { Flexbox } from 'shared/ui/flexbox';
import { TextField } from 'shared/ui/text-field';

import type { ArticleSortKey, ArticleSortOrder } from './select-article-sort';
import type { ArticleView } from './select-article-view';
import type { ArticleTag } from './select-article-tag';

import { SelectArticleSort } from './select-article-sort';
import { SelectArticleTag } from './select-article-tag';
import { SelectArticleView } from './select-article-view';

import { getArticles } from '../../../api/get-articles/get-articles';
import { articlesActions } from '../../../model/slice';
import {
  selectArticlesSortKey,
  selectArticlesSortOrder,
  selectArticlesSortQuery,
  selectArticlesSortTag,
  selectArticlesView,
} from '../../../model/selectors';

interface ArticlesHeaderProps {
  className?: string;
}

function ArticlesHeader({ className = '' }: ArticlesHeaderProps) {
  const { t } = useTranslation('translation', {
    keyPrefix: 'page.articles.header',
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
