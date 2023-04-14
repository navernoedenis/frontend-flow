import { useTranslation } from 'react-i18next';

import { ArticleView } from 'features/select-article-view';
import { ArticleList } from 'entities/article';

import { AppTypography } from 'shared/ui/app-typography';
import { useAppSelector } from 'shared/hooks';
import { articlesSelectors } from '../../../model/slice';
import {
  selectArticlesLoading,
  selectArticlesMounted,
  selectArticlesView,
} from '../../../model/selectors';

import classes from './articles-cards.module.scss';

function ArticlesCards() {
  const { t } = useTranslation('page.articles', { keyPrefix: 'cards' });

  const articles = useAppSelector(articlesSelectors.selectAll);
  const isLoading = useAppSelector(selectArticlesLoading);
  const isMounted = useAppSelector(selectArticlesMounted);
  const view = useAppSelector(selectArticlesView);

  const isNoResult = isMounted && !isLoading && !articles.length;

  if (isNoResult) {
    return (
      <AppTypography
        align="center"
        className={classes.noresult}
        uppercase
        weight="bold"
      >
        {`${t('no_articles')} :(`}
      </AppTypography>
    );
  }

  return (
    <ArticleList
      articles={articles}
      isCompact={view === ArticleView.COMPACT}
      isLoading={isLoading}
    />
  );
}

export default ArticlesCards;
