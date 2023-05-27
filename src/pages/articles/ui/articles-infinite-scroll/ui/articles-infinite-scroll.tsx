import { useCallback } from 'react';

import { ArticleView } from '@/features/article-select-view';
import { ArticleList } from '@/entities/article';

import { useAppDispatch, useAppSelector } from '@/shared/hooks';
import { getArticles } from '../../../api/get-articles/get-articles';
import { articlesSelectors } from '../../../model/slice';

import {
  selectArticlesHasMore,
  selectArticlesLoading,
  selectArticlesMounted,
  selectArticlesView,
  selectShouldScrollToTop,
} from '../../../model/selectors';

function ArticlesInfiniteScroll() {
  const articles = useAppSelector(articlesSelectors.selectAll);
  const hasMore = useAppSelector(selectArticlesHasMore);
  const isLoading = useAppSelector(selectArticlesLoading);
  const isMounted = useAppSelector(selectArticlesMounted);
  const shouldScrollToTop = useAppSelector(selectShouldScrollToTop);
  const view = useAppSelector(selectArticlesView);

  const dispatch = useAppDispatch();

  const handleLoadMore = useCallback(() => {
    if (hasMore) {
      dispatch(getArticles());
    }
  }, [dispatch, hasMore]);

  return (
    <ArticleList
      articles={articles}
      isCompact={view === ArticleView.COMPACT}
      isInfiniteScroll={hasMore}
      isLoading={!isMounted || isLoading}
      isVirtualized
      onLoadMore={handleLoadMore}
      shouldScrollToTop={shouldScrollToTop}
    />
  );
}

export default ArticlesInfiniteScroll;
