import { useEffect } from 'react';

import type { AppReducersLazy } from 'app/providers/store/types';
import { LazyReducers } from 'shared/lib/components';
import { Flexbox } from 'shared/ui/flexbox';
import { useAppDispatch, useAppSelector } from 'shared/hooks';

import { ArticlesHeader } from './articles-header';
import { ArticlesInfiniteScroll } from './articles-infinite-scroll';

import { onMountPage } from '../api/mount-page/mount-page';
import { articlesReducer } from '../model/slice';
import { selectArticlesMounted } from '../model/selectors';
import classes from './articles.module.scss';

const reducers: AppReducersLazy = {
  articles: articlesReducer,
};

function ArticlesPage() {
  const dispatch = useAppDispatch();
  const isMounted = useAppSelector(selectArticlesMounted);

  useEffect(() => {
    if (!isMounted) {
      dispatch(onMountPage());
    }
  }, [dispatch, isMounted]);

  return (
    <LazyReducers reducers={reducers} keepAfterUnmount>
      <Flexbox
        alignItems="stretch"
        className={classes.container}
        data-testid="articles-page"
        direction="column"
        gap="20"
      >
        <ArticlesHeader />
        <ArticlesInfiniteScroll />
      </Flexbox>
    </LazyReducers>
  );
}

export default ArticlesPage;
