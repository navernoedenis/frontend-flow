import { useState, useEffect, useCallback, useRef, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { VirtuosoGrid } from 'react-virtuoso';
import type { VirtuosoGridHandle } from 'react-virtuoso';

import { AppTypography } from '@/shared/ui/app-typography';
import { Flexbox } from '@/shared/ui/flexbox';

import { Storage } from '@/shared/services';
import { useEffectOnce, useInfiniteScroll, useThrottle } from '@/shared/hooks';

import type { Article } from '../../../model/types';
import {
  LS_ARTICLES_LIST_SCROLLED_HEIGHT,
  LS_ARTICLES_LIST_SCROLLED_INDEX,
} from '../model/constants';
import { ArticleCard, ArticleCardSkeleton } from '../../article-card';

import classes from './article-list.module.scss';

interface ArticlesList {
  articles: Article[];
  isCompact?: boolean;
  isInfiniteScroll?: boolean;
  isLoading?: boolean;
  isVirtualized?: boolean;
  onLoadMore?: VoidFunction;
  shouldScrollToTop?: boolean;
}

const ArticleList = ({
  articles,
  isCompact = false,
  isInfiniteScroll = false,
  isLoading = false,
  isVirtualized = false,
  onLoadMore = Function,
  shouldScrollToTop = false,
}: ArticlesList) => {
  const { t } = useTranslation('translation', {
    keyPrefix: 'entities.article',
  });

  const staticRef = useRef<HTMLDivElement | null>(null);
  const virtuosoRef = useRef<VirtuosoGridHandle | null>(null);
  const [isVirtuosoScrolling, setVirtuosoScrolling] = useState(false);

  const onSaveStaticScroll = useThrottle(() => {
    Storage.session.save(
      LS_ARTICLES_LIST_SCROLLED_HEIGHT,
      staticRef.current?.scrollTop ?? 0,
    );
  }, 300);

  const renderArticle = useCallback(
    (index: number, article: Article) => (
      <ArticleCard
        article={article}
        isCompact={isCompact}
        key={article.id}
        onClick={() => {
          if (isVirtualized) {
            Storage.session.save(LS_ARTICLES_LIST_SCROLLED_INDEX, index);
          }
        }}
      />
    ),
    [isCompact, isVirtualized],
  );

  const skeletonLoaders = useMemo(
    () => (
      <Flexbox
        className={classes.skeletonsContainer}
        data-testid="article-list-skeleton"
        gap="16"
        wrap
      >
        <ArticleCardSkeleton
          isCompact={isCompact}
          repeat={isVirtualized ? 2 : 6}
        />
      </Flexbox>
    ),
    [isCompact, isVirtualized],
  );

  const { triggerRef } = useInfiniteScroll({
    callback: onLoadMore,
  });

  useEffectOnce(() => {
    if (isVirtualized) {
      const index = Storage.session.get<number>(
        LS_ARTICLES_LIST_SCROLLED_INDEX,
      );

      if (typeof index === 'number') {
        // After mounting VirtuosoGrid component, need to wait some time,
        // before we can scroll to the element by index.
        // The author of this library recommends wrapping callback in setTimeout.
        // issue: https://github.com/petyosi/react-virtuoso/issues/350
        setTimeout(() => {
          virtuosoRef.current?.scrollToIndex({
            behavior: 'smooth',
            index,
          });
        }, 50);
      }
    }

    if (!isVirtualized) {
      const height = Storage.session.get<number>(LS_ARTICLES_LIST_SCROLLED_HEIGHT) ?? 0;
      staticRef.current?.scrollTo(0, height);
    }
  });

  useEffect(() => {
    const onRemoveScroll = () => {
      Storage.session.remove(LS_ARTICLES_LIST_SCROLLED_HEIGHT);
      Storage.session.remove(LS_ARTICLES_LIST_SCROLLED_INDEX);
    };

    window.addEventListener('beforeunload', onRemoveScroll);
    staticRef.current?.addEventListener('scroll', onSaveStaticScroll);

    return () => {
      window.removeEventListener('beforeunload', onRemoveScroll);
      staticRef.current?.removeEventListener('scroll', onSaveStaticScroll);
      staticRef.current = null;
    };
  }, [onSaveStaticScroll]);

  useEffect(() => {
    if (isVirtuosoScrolling) {
      Storage.session.remove(LS_ARTICLES_LIST_SCROLLED_INDEX);
    }
  }, [isVirtuosoScrolling]);

  useEffect(() => {
    if (shouldScrollToTop && isVirtualized) {
      virtuosoRef.current?.scrollToIndex({
        behavior: 'smooth',
        index: 0,
      });
    }

    if (shouldScrollToTop && !isVirtualized) {
      staticRef.current?.scrollTo(0, 0);
    }
  }, [isVirtualized, shouldScrollToTop]);

  if (!isLoading && !articles.length) {
    return (
      <AppTypography
        align="center"
        className={classes.noArticles}
        tag="h1"
        data-testid="no-articles"
        uppercase
        weight="bold"
      >
        {t('no_article')}
      </AppTypography>
    );
  }

  if (isVirtualized) {
    return (
      <div
        className={classes.virtualizedContainer}
        data-testid="virtualized-article-list"
      >
        <VirtuosoGrid
          components={{
            Footer: () => (
              <div
                data-testid="virtualized-article-skeletons"
                style={{ marginTop: articles.length ? 16 : 0 }}
              >
                {isLoading && skeletonLoaders}
              </div>
            ),
          }}
          data={articles}
          endReached={onLoadMore}
          isScrolling={setVirtuosoScrolling}
          itemContent={renderArticle}
          listClassName={classes.virtualizedList}
          ref={virtuosoRef}
          totalCount={articles.length}
        />
      </div>
    );
  }

  return (
    <Flexbox
      alignContent="start"
      alignItems="start"
      className={classes.staticContainer}
      data-testid="article-list"
      gap="16"
      ref={staticRef}
      wrap
    >
      {articles.map((article, index) => renderArticle(index, article))}
      {isLoading && skeletonLoaders}
      {isInfiniteScroll && <div data-testid="trigger" ref={triggerRef} />}
    </Flexbox>
  );
};

export default ArticleList;
