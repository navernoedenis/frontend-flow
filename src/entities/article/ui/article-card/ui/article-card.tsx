import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { AppTypography } from 'shared/ui/app-typography';
import { Flexbox } from 'shared/ui/flexbox';
import { LazyImage } from 'shared/ui/lazy-image';

import { classNames } from 'shared/lib/transforms/class-names';
import { openInNewTab } from 'shared/lib/open-in-new-tab';

import { ArticleBlockType } from '../../../model/types';
import type { Article, ArticleTextBlock } from '../../../model/types';

import classes from './article-card.module.scss';

interface ArticleCardProps {
  article: Article;
  className?: string;
  isCompact?: boolean;
  onClick?: VoidFunction;
  shouldOpenInNewTab?: boolean;
}

function ArticleCard({
  article,
  className = '',
  isCompact = false,
  onClick,
  shouldOpenInNewTab = false,
}: ArticleCardProps) {
  const navigate = useNavigate();
  const { t } = useTranslation('translation', {
    keyPrefix: 'entities.article',
  });

  const handleClick = useCallback(() => {
    const path = `/articles/${article.id}`;

    if (shouldOpenInNewTab) {
      openInNewTab(path);
    } else {
      navigate(path);
    }

    if (onClick) {
      onClick();
    }
  }, [article.id, navigate, onClick, shouldOpenInNewTab]);

  const containerClasses = classNames(classes.container, {
    [className]: Boolean(className),
    [classes.compact]: isCompact,
  });

  const textBlock = article.blocks.find(
    (block) => block.type === ArticleBlockType.TEXT,
  ) as ArticleTextBlock;

  return (
    <Flexbox
      className={containerClasses}
      data-testid="article-card"
      onClick={handleClick}
      alignItems="start"
    >
      <LazyImage className={classes.image} src={article.image} />

      <Flexbox
        className={classes.content}
        direction="column"
        alignItems="start"
        gap="16"
      >
        <AppTypography className={classes.title} tag="h4" lineClamp={1}>
          {article.title}
        </AppTypography>

        {textBlock && (
          <AppTypography lineClamp={3}>
            {textBlock.paragraphs.join('. ')}
          </AppTypography>
        )}

        <Flexbox gap="16">
          <AppTypography capitalizeFirstLetter noShrink>
            {`${t('date')}: ${article.createdAt}`}
          </AppTypography>

          <AppTypography capitalizeFirstLetter noShrink>
            {`${t('views')}: ${article.views}`}
          </AppTypography>
        </Flexbox>

        <AppTypography capitalize className={classes.tags} noShrink>
          {`${t('tags')}: ${article.tags.join(', ')}`}
        </AppTypography>
      </Flexbox>
    </Flexbox>
  );
}

export default ArticleCard;
