import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { AppTypography, Flexbox, LazyImage } from 'shared/ui';
import { classNames } from 'shared/lib/transforms/class-names';

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

      <Flexbox
        className={classes.content}
        direction="column"
        alignItems="start"
        gap="12"
      >
        <AppTypography className={classes.title} tag="h4" lineClamp={1}>
          {article.title}
        </AppTypography>

        {textBlock && (
          <AppTypography lineClamp={3}>
            {textBlock.paragraphs.join('. ')}
          </AppTypography>
        )}

        <Flexbox gap="12">
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
        </Flexbox>

        <AppTypography
          capitalize={isCompact}
          className={classes.tags}
          noShrink
          size="small"
          uppercase={!isCompact}
        >
          {isCompact && `${t('info.tags')}: `}
          {article.tags.join(', ')}
        </AppTypography>
      </Flexbox>
    </Link>
  );
}

export default ArticleCard;
