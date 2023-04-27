import { useCallback, useRef } from 'react';
import { VirtuosoGrid } from 'react-virtuoso';
import type { VirtuosoGridHandle } from 'react-virtuoso';

import { Flexbox } from 'shared/ui';
import { Storage } from 'shared/services';

import { useEffectOnce } from 'shared/hooks';
import type { Article } from '../../article-entity/model/types';
import { ArticleCard, ArticleCardSkeleton } from '../../article-card';
import { SAVED_SCROLL_INDEX } from '../model/constants';

import classes from './article-list.module.scss';

interface ArticlesList {
  articles: Article[];
  isCompact?: boolean;
  isLoading?: boolean;
}

const ArticleList = ({
  articles,
  isCompact = false,
  isLoading = false,
}: ArticlesList) => {
  const virtuosoRef = useRef<VirtuosoGridHandle | null>(null);

  useEffectOnce(() => {
    const index = Storage.session.get<number>(SAVED_SCROLL_INDEX);

    if (typeof index === 'number') {
      // After mounting VirtuosoGrid component, need to wait some time,
      // before we can scroll to element, by it's index.
      // The author of this library recommends wrapping callback in setTimeout.
      // issue: https://github.com/petyosi/react-virtuoso/issues/350
      setTimeout(() => {
        virtuosoRef.current?.scrollToIndex({ behavior: 'smooth', index });
      }, 50);
    }
  });

  const renderArticle = useCallback(
    (index: number, article: Article) => (
      <div onClick={() => Storage.session.save(SAVED_SCROLL_INDEX, index)}>
        <ArticleCard key={article.id} article={article} isCompact={isCompact} />
      </div>
    ),
    [isCompact],
  );

  return (
    <div data-testid="article-list">
      <VirtuosoGrid
        customScrollParent={document.querySelector('.app-page') as HTMLElement} // Todo: Rewrite
        data={articles}
        itemContent={renderArticle}
        listClassName={classes.list}
        ref={virtuosoRef}
        totalCount={articles.length}
      />

      {isLoading && (
        <Flexbox className={classes.skeleton} gap="20" wrap>
          {Array.from({ length: 9 }, (_, index) => (
            <ArticleCardSkeleton key={index} isCompact={isCompact} />
          ))}
        </Flexbox>
      )}
    </div>
  );
};

export default ArticleList;
