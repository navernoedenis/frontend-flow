import { useCallback } from 'react';

import { ArticleView } from 'pages/articles/ui/articles-header/ui/select-article-view';
import { ArticleList } from 'entities/article';

import { useAppDispatch, useAppSelector } from 'shared/hooks';
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
  const dispatch = useAppDispatch();

  const articles = useAppSelector(articlesSelectors.selectAll);
  const hasMore = useAppSelector(selectArticlesHasMore);
  const isLoading = useAppSelector(selectArticlesLoading);
  const isMounted = useAppSelector(selectArticlesMounted);
  const shouldScrollToTop = useAppSelector(selectShouldScrollToTop);
  const view = useAppSelector(selectArticlesView);

  const onGetArticles = useCallback(() => {
    if (hasMore) {
      dispatch(getArticles());
    }
  }, [dispatch, hasMore]);

  return (
    <ArticleList
      articles={articles}
      callback={onGetArticles}
      isCompact={view === ArticleView.COMPACT}
      isInfiniteScroll={hasMore}
      isLoading={!isMounted || isLoading}
      isVirtualized
      shouldScrollToTop={shouldScrollToTop}
    />
  );
}

export default ArticlesInfiniteScroll;
