import { useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { AppButton } from '@/shared/ui/app-button';
import { Flexbox } from '@/shared/ui/flexbox';

import { classNames } from '@/shared/lib/class-names';

import type { ArticleTag, ArticleTagButton } from '../model/types';
import classes from './article-select-tag.module.scss';

interface ArticleSelectTagProps {
  className?: string;
  onSelectTag: (tag: ArticleTag) => void;
  tag: ArticleTag;
}

function ArticleSelectTag({
  className = '',
  onSelectTag,
  tag,
}: ArticleSelectTagProps) {
  const { t } = useTranslation('translation', {
    keyPrefix: 'features.article-select-tag',
  });

  const onSelectArticleTag = useCallback(
    (tag: ArticleTag) => () => {
      onSelectTag(tag);
    },
    [onSelectTag],
  );

  const buttonOptions = useMemo<ArticleTagButton[]>(
    () => [
      { title: t('all'), value: 'all' },
      { title: t('business'), value: 'business' },
      { title: t('programming'), value: 'programming' },
      { title: t('science'), value: 'science' },
    ],
    [t],
  );

  const containerClasses = classNames('', {
    [className]: !!className,
  });

  return (
    <Flexbox
      className={containerClasses}
      data-testid="article-select-tag"
      gap="8"
    >
      {buttonOptions.map((option) => (
        <AppButton
          className={tag === option.value ? classes.active : ''}
          data-testid="article-select-tag-button"
          key={option.value}
          onClick={onSelectArticleTag(option.value)}
        >
          {option.title}
        </AppButton>
      ))}
    </Flexbox>
  );
}

export default ArticleSelectTag;
