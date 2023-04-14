import type { Article } from '../../article-entity/model/types';
import { ArticleCard, ArticleCardSkeleton } from '../../article-card';

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
}: ArticlesList) => (
  <div className={classes.container} data-testid="article-list">
    {articles.map((article) => (
      <ArticleCard article={article} isCompact={isCompact} key={article.id} />
    ))}
    {isLoading && (
      <>
        <ArticleCardSkeleton isCompact={isCompact} />
        <ArticleCardSkeleton isCompact={isCompact} />
        <ArticleCardSkeleton isCompact={isCompact} />
        <ArticleCardSkeleton isCompact={isCompact} />
        <ArticleCardSkeleton isCompact={isCompact} />
        <ArticleCardSkeleton isCompact={isCompact} />
      </>
    )}
  </div>
);

export default ArticleList;
