import { useTranslation } from 'react-i18next';

import { ArticleCard, ArticleCardSkeleton } from '@/entities/article';
import { AppTypography } from '@/shared/ui/app-typography';
import { Flexbox } from '@/shared/ui/flexbox';

import { useGetRecommendedQuery } from '../api/articles-recommended';
import classes from './articles-recommended.module.scss';

interface ArticlesRecommendedProp {
  className?: string;
  quantity?: number;
}

function ArticlesRecommended({
  className = '',
  quantity = 3,
}: ArticlesRecommendedProp) {
  const { t } = useTranslation('translation', {
    keyPrefix: 'features.articles-recommended',
  });

  const {
    data: articles = [],
    isError,
    isLoading,
  } = useGetRecommendedQuery(quantity);

  if (isError) {
    return null;
  }

  return (
    <Flexbox
      alignItems="start"
      className={className}
      data-testid="articles-recommended"
      direction="column"
    >
      <AppTypography
        capitalizeFirstLetter
        className={classes.title}
        size="large"
        weight="bold"
      >
        {t('title')}
      </AppTypography>

      <Flexbox gap="20" wrap>
        {isLoading && <ArticleCardSkeleton isCompact repeat={3} />}
        {articles.map((article) => (
          <ArticleCard
            article={article}
            isCompact
            key={article.id}
            shouldOpenInNewTab
          />
        ))}
      </Flexbox>
    </Flexbox>
  );
}

export default ArticlesRecommended;
