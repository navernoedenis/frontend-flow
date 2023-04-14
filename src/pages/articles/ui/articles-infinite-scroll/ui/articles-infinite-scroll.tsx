import { useLayoutEffect } from 'react';
import { selectNetworkStatusOnline } from 'widgets/network-status';
import { pageScrollActions, selectPageScroll } from 'features/save-page-scroll';
import {
  useAppDispatch,
  useAppSelector,
  useEffectOnce,
  useInfiniteScroll,
  useThrottle,
} from 'shared/hooks';

import { getArticlesNext } from '../../../api/get-articles-next/get-articles-next';
import { selectArticlesHasMore } from '../../../model/selectors';

function ArticlesInfiniteScroll() {
  const dispatch = useAppDispatch();
  const hasMore = useAppSelector(selectArticlesHasMore);
  const isOnline = useAppSelector(selectNetworkStatusOnline);
  const scrollPosition = useAppSelector((state) => selectPageScroll(state, 'articles'));

  const { triggerRef } = useInfiniteScroll({
    callback: () => {
      dispatch(getArticlesNext());
    },
  });

  const onScrollPage = useThrottle(() => {
    dispatch(
      pageScrollActions.add({
        page: 'articles',
        position: window.scrollY,
      }),
    );
  }, 500);

  useEffectOnce(() => {
    if (scrollPosition) {
      window.scrollTo(0, scrollPosition);
    }
  });

  useLayoutEffect(() => {
    window.addEventListener('scroll', onScrollPage);

    return () => {
      window.removeEventListener('scroll', onScrollPage);
    };
  }, [onScrollPage]);

  return (
    <>
      {hasMore && isOnline && (
        <div data-testid="articles-infinite-scroll" ref={triggerRef} />
      )}
    </>
  );
}

export default ArticlesInfiniteScroll;
