import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/transforms/class-names';
import { LazyImage } from 'shared/ui/lazy-image';
import { AppTypography } from 'shared/ui/app-typography';

import { ArticleBlockType } from '../../article-entity/model/types';
import type {
  Article,
  ArticleTextBlock,
} from '../../article-entity/model/types';

import classes from './article-card.module.scss';

interface ArticleCardProps {
  article: Article;
  className?: string;
  isCompact?: boolean;
}

function ArticleCard({
  article,
  className = '',
  isCompact = false,
}: ArticleCardProps) {
  const { t } = useTranslation('entities.article');

  const containerClasses = classNames(classes.container, {
    [className]: Boolean(className),
    [classes.compact]: isCompact,
  });

  const textBlock = article.blocks.find(
    (block) => block.type === ArticleBlockType.TEXT,
  ) as ArticleTextBlock;

  return (
    <Link
      className={containerClasses}
      data-testid="article-card"
      to={`/articles/${article.id}`}
    >
      <LazyImage className={classes.image} src={article.image} />
      <div className={classes.content}>
        <AppTypography className={classes.title} tag="h4" lineClamp={1}>
          {article.title}
        </AppTypography>

        {textBlock && (
          <AppTypography lineClamp={3}>
            {textBlock.paragraphs.join('. ')}
          </AppTypography>
        )}

        <div className={classes.info}>
          <AppTypography capitalizeFirstLetter size="small" noShrink>
            {t('info.date')}
            {': '}
            {article.createdAt}
          </AppTypography>

          <AppTypography capitalizeFirstLetter size="small" noShrink>
            {t('info.views')}
            {': '}
            {article.views}
          </AppTypography>
        </div>

        <AppTypography
          className={classes.tags}
          noShrink
          size="small"
          capitalize={isCompact}
          uppercase={!isCompact}
        >
          {isCompact && `${t('info.tags')}: `}
          {article.tags.join(', ')}
        </AppTypography>
      </div>
    </Link>
  );
}

export default ArticleCard;
