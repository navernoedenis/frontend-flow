import { useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import type { AppReducersLazy } from 'app/providers/store/types';
import { ArticleList } from 'entities/article';

import {
  useAppDispatch,
  useAppSelector,
  useEffectOnce,
  useInfiniteScroll,
} from 'shared/hooks';

import { AppSelect } from 'shared/ui/app-select';
import { AppTypography } from 'shared/ui/app-typography';

import type { AppSelectOption } from 'shared/ui/app-select';

import { LazyReducers } from 'shared/lib/lazy-reducers';
import { LS_ARTICLES_VIEW_KEY } from 'shared/constants/local-storage';
import { LocalStorage } from 'shared/services/local-storage';

import { getArticles } from '../api/get-articles/get-articles';
import { getArticlesNext } from '../api/get-articles-next/get-articles-next';

import { articlesReducer, articlesSelectors } from '../model/slice';
import { ArticleView } from '../model/types';
import { selectArticlesError, selectArticlesLoading } from '../model/selectors';

import classes from './articles.module.scss';

const reducers: AppReducersLazy = {
  articles: articlesReducer,
};

function ArticlesPage() {
  const { t } = useTranslation(['page.articles', 'entities.article']);
  const dispatch = useAppDispatch();
  const [view, setView] = useState<ArticleView>(
    () => LocalStorage.get(LS_ARTICLES_VIEW_KEY) ?? ArticleView.NORMAL,
  );

  const articles = useAppSelector(articlesSelectors.selectAll);
  const error = useAppSelector(selectArticlesError);
  const isLoading = useAppSelector(selectArticlesLoading);

  useEffectOnce(() => {
    dispatch(getArticles());
  });

  const { triggerRef } = useInfiniteScroll({
    callback: () => {
      dispatch(getArticlesNext());
    },
  });

  const options: AppSelectOption[] = useMemo(
    () => [
      { title: t('select.normal'), value: ArticleView.NORMAL },
      { title: t('select.compact'), value: ArticleView.COMPACT },
    ],
    [t],
  );

  const isCompact = ArticleView.COMPACT === view;

  return (
    <LazyReducers reducers={reducers}>
      <div data-testid="articles-page">
        {!isLoading && error && (
          <AppTypography error>
            {'ERROR : '}
            {error}
          </AppTypography>
        )}

        <header className={classes.header}>
          <AppSelect
            className={classes.select}
            onSelect={(value) => {
              setView(value as ArticleView);
              LocalStorage.save(LS_ARTICLES_VIEW_KEY, value);
            }}
            options={options}
            title={t('select.view')}
            value={t(`select.${view}`)}
          />
        </header>

        <ArticleList
          articles={articles}
          isCompact={isCompact}
          isLoading={isLoading}
        />

        <div ref={triggerRef} />
      </div>
    </LazyReducers>
  );
}

export default ArticlesPage;
